export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}

export interface ICreateTask {
  title: string;
  description: string;
  userId: number;
}