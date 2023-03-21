import { IUser, IUserUpdate } from "../../interfaces/users/index";
import { User } from "../../entities/user.entity";
import { userWithoutPassword } from "../../serializers/user.serializer";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";

const updateUserService = async (
  userData: IUserUpdate,
  userId: number
): Promise<any> => {
  if (Object.keys(userData).includes("id")) {
    throw new AppError("id field cannot be changed", 401);
  }
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userId });

  if (findUser === null) {
    throw new AppError("Invalid id", 404);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword = await userWithoutPassword.validate(
    updatedUser,
    {
      stripUnknown: true,
    }
  );

  return updatedUserWithoutPassword;
};

export default updateUserService;
