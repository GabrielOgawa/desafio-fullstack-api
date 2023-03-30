import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from "../interfaces/contacts";

const contactSerializer: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const contactUpdate: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
});

const contactResponse: SchemaOf<IContact> = yup.object().shape({
  id: yup.number().required(),
  createdAt: yup.date().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  user: yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    id: yup.number().required(),
    createdAt: yup.date().required(),
    phone: yup.string().required(),
  }),
});

export { contactSerializer, contactUpdate, contactResponse };
