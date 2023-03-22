import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";
import { IContact } from "../../interfaces/contacts";
import { contactResponse } from "../../serializers/contact.serializer";

const retrieveContactService = async (contactId: number): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.find({
    relations: {
      user: true,
    },
    where: {
      id: contactId,
    },
  });

  if (!contact) {
    throw new AppError("Invalid id", 404);
  }

  const response = await contactResponse.validate(contact[0], {
    stripUnknown: true,
  });

  return response!;
};

export default retrieveContactService;
