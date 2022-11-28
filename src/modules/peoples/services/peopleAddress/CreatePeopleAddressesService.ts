import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import { IAddressRepository } from "@modules/peoples/repositories/AddressRepository";
import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";

type CreatePeopleAddressesParams = {
  peopleId: string;
  street: string;
  city: string;
  state: string;
  stateAcronym: string;
  neighborhood: string;
  zip: string;
};

export class CreatePeopleAddressesService {
  constructor(
    private addressRepository: IAddressRepository,
    private peopleRepository: IPeopleRepository
  ) {}
  async execute({
    peopleId,
    street,
    city,
    state,
    stateAcronym,
    neighborhood,
    zip,
  }: CreatePeopleAddressesParams): Promise<PeopleEntity> {
    const peopleExists = await this.peopleRepository.findPeopleById({
      id: peopleId,
    });

    if (!peopleExists) {
      throw new Error("People not found");
    }
    const address = await this.addressRepository.createAddress({
      street,
      city,
      state,
      stateAcronym,
      neighborhood,
      zip,
    });

    const peopleAddress = await this.peopleRepository.updatePeopleAddresses({
      peopleId,
      addressId: address.id,
    });

    return peopleAddress;
  }
}
