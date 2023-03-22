import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contact = AppDataSource.getRepository(Contact);
  const foundContact = await contact.findOneBy({ id: contactId });

  if (foundContact === null) {
    throw new AppError("Invalid id", 404);
  }

  await contact.remove(foundContact!);
};

export default deleteContactService;
