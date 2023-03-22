import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactController);
contactsRoutes.get("", ensureAuthMiddleware, listContactController);
contactsRoutes.patch("/:id", ensureAuthMiddleware, updateContactController);
contactsRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);
contactsRoutes.get("/:id", ensureAuthMiddleware, retrieveContactController);

export default contactsRoutes;
