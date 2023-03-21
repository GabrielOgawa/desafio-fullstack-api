import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

const userWithoutPassword: SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  id: yup.number().required(),
  createdAt: yup.date().required(),
  phone: yup.string().required(),
});

const usersWithoutPassword: SchemaOf<IUser[]> = yup.array().of(
  yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    id: yup.number().required(),
    createdAt: yup.date().required(),
    phone: yup.string().required(),
  })
);

const userUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  phone: yup.string().notRequired(),
});

export {
  userSerializer,
  userWithoutPassword,
  userUpdate,
  usersWithoutPassword,
};
