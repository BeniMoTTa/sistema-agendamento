import { Request, Response } from "express";
import {
  TUserRequestWithColor,
  TUserResponse,
} from "../../interfaces/user.interfaces";
import { createUserService } from "../../services/users/create.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequestWithColor = req.body;

  const newUser: TUserResponse = await createUserService(data);

  return res.status(201).json(newUser);
};
