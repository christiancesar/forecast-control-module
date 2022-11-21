export class AddressEntity {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    street,
    city,
    state,
    zip,
  }: AddressEntity) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}