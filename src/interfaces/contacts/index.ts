import { IUser } from "../users";

export interface IContactRequest {
  name: string;
  email: string;
  phone: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}

export interface IContact {
  id: number;
  email: string;
  phone: string;
  createdAt: Date;
  user: IUser;
}
