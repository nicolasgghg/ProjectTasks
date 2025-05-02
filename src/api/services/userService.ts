import { ICreateUser } from "../../types/user";
import { API_URL } from "../config";

export async function registerUser(payload: ICreateUser): Promise<void> {
  const response = await fetch(`${API_URL}/api/user/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error registering user");
  }
}
