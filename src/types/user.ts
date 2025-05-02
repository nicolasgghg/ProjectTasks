import { ITask } from "./task";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: null;
  tasks: ITask[];
}
