import { compare } from "bcryptjs";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 403);
  }

  if (!user.isActive) {
    throw new AppError("User is inactive", 403);
  }

  const passwordVerify = await compare(password, user.password);
  if (!passwordVerify) {
    throw new AppError("Email or password invalid", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return token;
};

export default createSessionService;
