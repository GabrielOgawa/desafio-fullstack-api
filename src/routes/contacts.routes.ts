import { Router } from "express";
import {
  createContactController,
  listContactController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactController);
contactsRoutes.get("", ensureAuthMiddleware, listContactController);
contactsRoutes.patch("/:id");
contactsRoutes.delete("/:id");
contactsRoutes.get("/:id");

export default contactsRoutes;
