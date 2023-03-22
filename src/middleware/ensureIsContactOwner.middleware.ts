import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { AppError } from "../errors/AppError";

const ensureIsContactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = contactRepository.find({
    relations: {
      user: true,
    },
    where: {
      id: +req.params.id,
    },
  });

  const foundContact = await contact;

  if (foundContact[0].user.id !== req.user.id) {
    throw new AppError("Missing permitions", 403);
  }

  return next();
};

export default ensureIsContactOwnerMiddleware;
