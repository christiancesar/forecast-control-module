export type Coordinates = {
  longitude: string;
  latitude: string;
};

export class AddressEntity {
  id: string;
  street: string;
  city: string;
  state: string;
  stateAcronym: string;
  neighborhood: string;
  zip: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    street,
    city,
    neighborhood,
    state,
    stateAcronym,
    zip,
  }: AddressEntity) {
    this.id = id;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.stateAcronym = stateAcronym;
    this.zip = zip;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
