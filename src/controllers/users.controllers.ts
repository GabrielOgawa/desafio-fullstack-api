import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsersService.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updatUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(userData, +userId);
  return res.json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  await deleteUserService(+userId);
  return res.status(204).json();
};

const retrieveUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const user = await retrieveUserService(+userId);
  return res.status(200).json(user);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
  retrieveUserController,
};
