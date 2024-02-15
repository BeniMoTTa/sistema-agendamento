import { Request, Response } from "express";

import { TUserResponse } from "../../interfaces/user.interfaces";
import { retrieveUserService } from "../../services/users/retrieve.service";

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  const user: TUserResponse = await retrieveUserService(userId);

  return res.json(user);
};
