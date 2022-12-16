import { prisma } from "@shared/database/prisma";
import { PeopleEntity } from "../entities/PeopleEntity";
import PrismaPeopleMapper from "./mappers/PrismaPeopleMapper";

type CreatePeopleDTO = {
  email: string | null;
  phone: string[];
  note: string | null;
  addressesIds?: string[];
  typePerson: string; //Pessoa Fisica ou Juridica

  fistName: string;
  lastName: string;
  fullName: string;
  individualTaxIdentification: string | null; //CPF(ITIN)

  tradingName: string; //Nome Fantasia
  comapanyName: string; //Razão Social
  stateRegistration: string | null; //Inscrição Estadual
  employerIdentificationNumber: string | null; //CNPJ (EIN)

  isCustomer: boolean;
  isSupplier: boolean;
  isEmployee: boolean;
};

type ShowPeopleDTO = {
  id: string;
};

type UpdatePeopleAddressesDTO = {
  peopleId: string;
  addressId: string;
};

export interface IPeopleRepository {
  createUser(people: CreatePeopleDTO): Promise<PeopleEntity>;
  findPeopleById(people: ShowPeopleDTO): Promise<PeopleEntity | null>;
  listAllPeoples(): Promise<PeopleEntity[]>;
  updatePeopleAddresses(
    peopleAdresses: UpdatePeopleAddressesDTO
  ): Promise<PeopleEntity>;
}

const peopleInclude = {
  addresses: true,
  employee: {
    include: {
      commissionedBy: {
        include: {
          expertArea: true,
        },
      },
      department: {
        include: {
          employees: false,
        },
      },
      people: false,
    },
  },
};

export class PeopleRepository implements IPeopleRepository {
  async findPeopleById({ id }: ShowPeopleDTO): Promise<PeopleEntity | null> {
    const people = await prisma.people.findUnique({
      where: {
        id,
      },
      include: peopleInclude,
    });

    return PrismaPeopleMapper.toDomain(people);
  }

  async createUser(peopleData: CreatePeopleDTO): Promise<PeopleEntity> {
    const people = await prisma.people.create({
      data: peopleData,
      include: peopleInclude,
    });

    return PrismaPeopleMapper.toDomain(people)!;
  }

  async listAllPeoples(): Promise<PeopleEntity[]> {
    const peoples = await prisma.people.findMany({
      include: peopleInclude,
    });

    return peoples.map((people) => PrismaPeopleMapper.toDomain(people)!);
  }

  async updatePeopleAddresses({
    addressId,
    peopleId,
  }: UpdatePeopleAddressesDTO): Promise<PeopleEntity> {
    const people = await prisma.people.update({
      where: {
        id: peopleId,
      },
      data: {
        addresses: {
          connect: {
            id: addressId,
          },
        },
      },
      include: peopleInclude,
    });

    return PrismaPeopleMapper.toDomain(people)!;
  }
}
