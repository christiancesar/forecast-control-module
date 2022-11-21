import { AddressEntity } from "./AddressEntity";

export class PeopleEntity {
  id: string;
  taxIdentification?: string;
  email?: string;
  phone: string;
  address?: AddressEntity;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    taxIdentification,
    email,
    phone,
    address,
    // createdAt,
    // updatedAt
  }: PeopleEntity) {
    this.id = id;
    this.taxIdentification = taxIdentification;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}