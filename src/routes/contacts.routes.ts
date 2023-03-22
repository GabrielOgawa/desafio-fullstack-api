import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
import ensureIsContactOwnerMiddleware from "../middleware/ensureIsContactOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureAuthMiddleware, createContactController);
contactsRoutes.get("", ensureAuthMiddleware, listContactController);
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsContactOwnerMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsContactOwnerMiddleware,
  deleteContactController
);
contactsRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIsContactOwnerMiddleware,
  retrieveContactController
);

export default contactsRoutes;
