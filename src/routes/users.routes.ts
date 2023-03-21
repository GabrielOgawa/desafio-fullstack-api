import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", listUsersController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.get("/:id", retrieveUserController);

export default userRoutes;
