import { AddressEntity } from "@modules/peoples/entities/AddressEntity";

export interface ICreateUserDTO {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  address?: AddressEntity;
}
