import { API_URL, getAuthToken } from "../config";
import { IUser } from "../../types/user";

export async function fetchUserByToken(): Promise<IUser> {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/api/user/authenticateByToken`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Token inválido ou expirado");
  }

  const json = await response.json();
  return json.data.result;
  
}
