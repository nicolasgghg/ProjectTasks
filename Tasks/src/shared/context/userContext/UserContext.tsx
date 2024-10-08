import React, { createContext, useState, useCallback, useEffect } from 'react';

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IUserContext {
  user: IUser | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = useCallback((email: string, password: string): boolean => {
    if (email && password) {
      const data = { id: 1, name: "Nicolas", email}; 
      setUser(data);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(data));
      return true;
    } else {
      alert("Some fields are empty");
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
