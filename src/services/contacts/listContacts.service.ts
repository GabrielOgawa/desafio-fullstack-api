import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import { IContact } from "../../interfaces/contacts";

const listContactService = async (userId: number): Promise<IContact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const joinContact = await contactRepository
    .createQueryBuilder("contact")
    .innerJoinAndSelect("contact.user", "user")
    .where("contact.user.id = :id_contact", { id_contact: userId })
    .select(["contact", "user.name", "user.id"])
    .getMany();

  return joinContact;
};

export default listContactService;
