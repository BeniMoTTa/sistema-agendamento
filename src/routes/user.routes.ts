import { Router } from "express";
import {
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureUserExistsMiddleware,
} from "../middlewares";
import { userSchemaRequest } from "../schemas/user.schema";
import {
  createUserController,
  deleteUserController,
} from "../controllers/users";
import { retrieveUserController } from "../controllers/users/retrieve.controller";
import { updateUserController } from "../controllers/users/update.controller";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailExistsMiddleware,
  createUserController
);
userRoutes.get("", retrieveUserController);

userRoutes.patch("/:id", updateUserController);

userRoutes.delete("/:id", ensureUserExistsMiddleware, deleteUserController);
