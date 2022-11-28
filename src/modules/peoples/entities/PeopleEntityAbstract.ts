import { AddressEntity } from "./AddressEntity";

export class PeopleEntityAbstract {
  id: string;
  email: string | null;
  phone: string[];
  note: string | null;
  addresses: AddressEntity[];
  createdAt: Date;
  updatedAt: Date;

  constructor({ id, email, phone, note, addresses }: PeopleEntityAbstract) {
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.note = note;
    this.addresses = addresses;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
