import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { usersWithoutPassword } from "../../serializers/user.serializer";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const listUsersWithoutPassword = await usersWithoutPassword.validate(users, {
    stripUnknown: true,
  });

  return listUsersWithoutPassword!;
};

export default listUsersService;
