import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchUserByToken } from "../../api/services/authService";
import { IUpdateUser, IUser } from "../../types/user";
import { API_URL } from "../../api/config";
import { updateUserService } from "../../api/services/userService";

interface UserContextType {
  user: IUser | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (payload: IUpdateUser) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) return;
    fetchUserByToken()
      .then((u) => {
        setUser(u);
        setIsLoggedIn(true);
      })
      .catch(() => {
        setUser(null);
        setIsLoggedIn(false);
      });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const resp = await fetch(`${API_URL}/api/user/authenticate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!resp.ok) throw new Error("Invalid credentials");
      const json = await resp.json();
      const token = json.data.token;

      localStorage.setItem("auth-token", token);
      const u = await fetchUserByToken();
      console.log(u);

      setUser(u);
      setIsLoggedIn(true);
      return true;
    } catch {
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth-token");
    setUser(null);
    setIsLoggedIn(false);
  }, []);

  const updateUser = useCallback(async (payload: IUpdateUser) => {
    try {
      const response = await updateUserService(payload);
      setUser(response);
    } catch (err: any) {
      console.log(err.message);
      throw err;
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, login, logout, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
