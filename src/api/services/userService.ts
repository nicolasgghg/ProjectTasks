import { API_URL } from "../config";

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<void> {
  const response = await fetch(`${API_URL}/api/user/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao registrar usuário");
  }
}
