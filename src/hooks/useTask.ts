import { useState, useCallback, useEffect } from "react";
import { ITask, ICreateTask } from "../types/task";
import { createTask, getTasks } from "../api/services/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadingTasks = useCallback(async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    loadingTasks();
  }, [loadingTasks]);

  const addTask = useCallback(async (data: ICreateTask) => {
    try {
      const newTask = await createTask(data);
      setTasks((prev) => [...prev, newTask]);
      loadingTasks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  return { tasks, error, addTask, loadingTasks };
}
