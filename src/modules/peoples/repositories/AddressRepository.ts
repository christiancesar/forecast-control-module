import { prisma } from "@shared/database/prisma";
import { AddressEntity } from "../entities/AddressEntity";

type CreateAddressDTO = {
  street: string;
  city: string;
  state: string;
  stateAcronym: string;
  neighborhood: string;
  zip: string;
};

type UpdateAddressDTO = {
  addressId: string;
  street: string;
  city: string;
  state: string;
  stateAcronym: string;
  neighborhood: string;
  zip: string;
};

export interface IAddressRepository {
  createAddress(address: CreateAddressDTO): Promise<AddressEntity>;
  updatePeopleAddress(address: UpdateAddressDTO): Promise<AddressEntity>;
}

export class AddressRepository implements IAddressRepository {
  async createAddress({
    city,
    neighborhood,
    state,
    stateAcronym,
    street,
    zip,
  }: CreateAddressDTO): Promise<AddressEntity> {
    const address = await prisma.address.create({
      data: {
        city,
        neighborhood,
        state,
        stateAcronym,
        street,
        zip,
      },
    });

    return address;
  }

  async updatePeopleAddress({
    addressId,
    city,
    neighborhood,
    state,
    stateAcronym,
    street,
    zip,
  }: UpdateAddressDTO): Promise<AddressEntity> {
    const address = await prisma.address.update({
      where: {
        id: addressId,
      },
      data: {
        city,
        neighborhood,
        state,
        stateAcronym,
        street,
        zip,
      },
    });

    return address;
  }
}
