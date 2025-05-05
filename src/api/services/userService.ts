import { ICreateUser, IUpdateUser, IUser } from "../../types/user";
import { API_URL, getAuthToken } from "../config";

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


export async function updateUserService(
  Payload: IUpdateUser
): Promise<IUser> {
  const token = getAuthToken();

  

  const response = await fetch(`${API_URL}/api/user/`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error in update User");
  }

  const json = await response.json();
  return json.data;
}