import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IContact, IContactRequest } from "../../interfaces/contacts";
import { contactResponse, contactSerializer } from "../../serializers/contact.serializer";

const createContactService = async (
  data: IContactRequest,
  userId: number
): Promise<IContact> => {
  const { email, phone, name } = data;
  const contactRepository = AppDataSource.getRepository(Contact);
  const user = AppDataSource.getRepository(User);

  const duplicateEmail = await contactRepository.findOneBy({
    email: email
  })

  if (duplicateEmail) {
    throw new AppError("Contact already exists")
  }
  try {
    await contactSerializer.validate(data, {
      stripUnknown: true,
      abortEarly: false,
    });
  } catch (err) {
    throw new AppError(err.errors);
  }

  const userExist = await user.findOneBy({
    id: userId,
  });

  const createContact = contactRepository.create({
    name: name,
    email: email,
    phone: phone,
    user: userExist!,
  });

  await contactRepository.save(createContact);

  const response = await contactResponse.validate(createContact, {
    stripUnknown: true,
  });
  return response;
};

export default createContactService;
