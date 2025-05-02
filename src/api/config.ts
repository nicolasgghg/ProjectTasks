export const API_URL =
  import.meta.env.VITE_FETCH_URL || "http://localhost:3030";

export const getAuthToken = () :string => {
  return localStorage.getItem("auth-token") || "";
}
