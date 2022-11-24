import { AddressEntity } from "./AddressEntity";

export class PeopleEntityAbstract {
  id: string;
  email?: string;
  phone?: string[] ;
  note?: string;
  address?: AddressEntity;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    email,
    phone,
    note,
    address,
  }: PeopleEntityAbstract) {
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.note = note;
    this.address = address;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}