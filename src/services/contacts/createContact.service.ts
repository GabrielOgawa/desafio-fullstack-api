import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { IContactRequest } from "../../interfaces/contacts";
import { contactResponse } from "../../serializers/contact.serializer";

const createContactService = async (
  data: IContactRequest,
  userId: number
): Promise<any> => {
  const { email, phone, name } = data;
  const contactRepository = AppDataSource.getRepository(Contact);
  const user = AppDataSource.getRepository(User);

  const userExist = await user.findOneBy({
    id: userId,
  });

  if (userExist != null) {
    const createContact = contactRepository.create({
      name: name,
      email: email,
      phone: phone,
      user: userExist,
    });

    await contactRepository.save(createContact);

    const response = await contactResponse.validate(createContact, {
      stripUnknown: true,
    });
    return response;
  }
};

export default createContactService;
