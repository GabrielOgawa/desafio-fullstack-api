import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";
import ensureIsUserOwnerMiddleware from "../middleware/ensureIsUserOwner.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUsersController);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsUserOwnerMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsUserOwnerMiddleware,
  deleteUserController
);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureIsUserOwnerMiddleware,
  retrieveUserController
);

export default userRoutes;
