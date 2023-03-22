import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const ensureIsUserOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (+req.params.id !== req.user.id) {
    throw new AppError("Missing permissions", 403);
  }

  return next();
};

export default ensureIsUserOwnerMiddleware;
