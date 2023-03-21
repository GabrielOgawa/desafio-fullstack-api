import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: number): Promise<void> => {
  const user = AppDataSource.getRepository(User);
  const foundUser = await user.findOneBy({ id: userId });
  const inactiveUser = await user.find({
    withDeleted: true,
    where: {
      id: userId,
    },
  });

  if (inactiveUser.length < 1) {
    throw new AppError("Invalid id", 404);
  }

  if (Object.values(inactiveUser[0])[6] === false) {
    throw new AppError("User is already inactive");
  }

  await user.softRemove(foundUser!);

  await user.save({ ...foundUser, isActive: false });
};

export default deleteUserService;
