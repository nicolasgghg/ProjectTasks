import { ICreateTask, ITask, IUpdateTask } from "../../types/task";
import { API_URL, getAuthToken } from "../config";

export async function createTask(payload: ICreateTask) {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/api/task/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error creating task");
  }

  const json = await response.json();
  return json.data;
}

export async function getTasks(): Promise<ITask[]> {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/api/task/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error on loading task");
  }

  const json = await response.json();
  return json.data;
}

export async function updateTaskService(Payload : IUpdateTask): Promise<ITask[]> {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/api/task/${Payload.id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Payload)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error in update task");
  }

  const json = await response.json();
  return json.data;
}
