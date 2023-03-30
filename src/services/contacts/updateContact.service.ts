import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../../data-source";
import { IContact, IContactUpdate } from "../../interfaces/contacts";
import { Contact } from "../../entities/contacts.entity";
import { contactResponse, contactUpdate } from "../../serializers/contact.serializer";

const updateContactService = async (
  data: IContactUpdate,
  contactId: number
): Promise<IContact> => {
  if (Object.keys(data).includes("id")) {
    throw new AppError("id field cannot be changed", 401);
  }

  try {
    await contactUpdate.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });
  } catch (err) {
    throw new AppError(err.errors);
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.find({
    relations: {
      user: true,
    },
    where: {
      id: contactId,
    },
  });

  if (findContact.length < 1) {
    throw new AppError("Invalid id", 404);
  }

  const updatedContact = contactRepository.create({
    ...findContact[0],
    ...data,
  });

  await contactRepository.save(updatedContact);

  const response = await contactResponse.validate(updatedContact, {
    stripUnknown: true,
  });

  return response;
};

export default updateContactService;
