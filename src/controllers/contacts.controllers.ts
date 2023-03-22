import { Request, Response } from "express";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";
import createContactService from "../services/contacts/createContact.service";
import listContactService from "../services/contacts/listContacts.service";

const createContactController = async (req: Request, res: Response) => {
  const data: IContactRequest = req.body;
  const userId: number = req.user.id;
  const newContact = await createContactService(data, userId);
  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response) => {
  const userId: number = req.user.id;
  const contacts = await listContactService(userId);

  return res.status(200).json(contacts);
};

// const updateUserController = async (req: Request, res: Response) => {
//   const userData: IContactUpdate = req.body;
//   const userId = req.params.id;
//   const updatedUser = await updateUserService(userData, +userId);
//   return res.json(updatedUser);
// };

// const deleteUserController = async (req: Request, res: Response) => {
//   const userId: string = req.params.id;
//   await deleteUserService(+userId);
//   return res.status(204).json();
// };

// const retrieveUserController = async (req: Request, res: Response) => {
//   const userId: string = req.params.id;
//   const user = await retrieveUserService(+userId);
//   return res.status(200).json(user);
// };

export { createContactController, listContactController };
