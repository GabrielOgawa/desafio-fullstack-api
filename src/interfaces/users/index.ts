export interface IUserRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}
