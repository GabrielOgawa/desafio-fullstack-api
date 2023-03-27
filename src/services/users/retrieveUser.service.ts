import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users";
import { userWithoutPassword } from "../../serializers/user.serializer";

const retrieveUserService = async (userId: number): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("Invalid id", 404);
  }

  const listUserWithoutPassword = await userWithoutPassword.validate(user, {
    stripUnknown: true,
  });

  return listUserWithoutPassword!;
};

export default retrieveUserService;
