import { Request, Response } from "express";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactService from "../services/contacts/listContacts.service";
import retrieveContactService from "../services/contacts/retrieveContact.service";
import updateContactService from "../services/contacts/updateContact.service";

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

const updateContactController = async (req: Request, res: Response) => {
  const data: IContactUpdate = req.body;
  const contactId = req.params.id;
  const updatedUser = await updateContactService(data, +contactId);
  return res.json(updatedUser);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  await deleteContactService(+contactId);
  return res.status(204).json();
};

const retrieveContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const contact = await retrieveContactService(+contactId);
  return res.status(200).json(contact);
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
  retrieveContactController,
};
