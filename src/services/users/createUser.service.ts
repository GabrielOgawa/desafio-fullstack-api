import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users/index";
import { userWithoutPassword, userSerializer } from "../../serializers/user.serializer";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  const duplicateUser = (await users).find((e) => e.email === userData.email);

  if (duplicateUser) {
    throw new AppError("User already exists");
  }

  try {
    await userSerializer.validate(userData, {
      stripUnknown: true,
      abortEarly: false,
    });
  } catch (err) {
    throw new AppError(err.errors);
  }
  const createUser = userRepository.create(userData);
  await userRepository.save(createUser);

  const userReponse = await userWithoutPassword.validate(createUser, {
    stripUnknown: true,
  });

  return userReponse;
};

export default createUserService;
