import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { ICreateTask, ITask, IUpdateTask } from "../../types/task";
import {
  createTask,
  deleteTaskService,
  getTasks,
  updateTaskService,
} from "../../api/services/taskService";
import { useUser } from "../userContext/UserContext";

interface TaskContextType {
  tasks: ITask[] | null;
  error: any;
  addTask: (payload: ICreateTask) => Promise<void>;
  updateTask: (payload: IUpdateTask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadingTasks = useCallback(async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    loadingTasks();
  }, [loadingTasks]);

  const addTask = useCallback(async (payload: ICreateTask) => {
    try {
      if ((tasks?.length ?? 0) >= 10) {
        return alert("You have limits task in 10");
      }

      const newTask = await createTask(payload);
      setTasks((prev) => [...(prev ?? []), newTask]);
      loadingTasks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  const updateTask = useCallback(async (payload: IUpdateTask) => {
    try {
      await updateTaskService(payload);
      loadingTasks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  const deleteTask = useCallback(async (id: number) => {
    try {
      await deleteTaskService(id);
      loadingTasks();
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, error, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTask must be used within a UserProvider");
  return ctx;
}
