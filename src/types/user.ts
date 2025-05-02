import { ITask } from "./task";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: null;
  tasks: ITask[];
}

export interface ICreateUser{
  name: string,
  email: string,
  password: string
}