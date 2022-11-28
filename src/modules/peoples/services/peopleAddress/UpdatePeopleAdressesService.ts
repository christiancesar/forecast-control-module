import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import { IAddressRepository } from "@modules/peoples/repositories/AddressRepository";
import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";

type UpdatePeopleAddressesParams = {
  peopleId: string;
  addressId: string;
  street: string;
  city: string;
  state: string;
  stateAcronym: string;
  neighborhood: string;
  zip: string;
};

export class UpdatePeopleAddressesService {
  constructor(
    private addressRepository: IAddressRepository,
    private peopleRepository: IPeopleRepository
  ) {}
  async execute({
    peopleId,
    addressId,
    street,
    city,
    state,
    stateAcronym,
    neighborhood,
    zip,
  }: UpdatePeopleAddressesParams): Promise<PeopleEntity> {
    const peopleExists = await this.peopleRepository.findPeopleById({
      id: peopleId,
    });

    if (!peopleExists) {
      throw new Error("People not found");
    }

    await this.addressRepository.updatePeopleAddress({
      addressId,
      street,
      city,
      state,
      stateAcronym,
      neighborhood,
      zip,
    });

    const people = await this.peopleRepository.findPeopleById({
      id: peopleId,
    });

    return people!;
  }
}
