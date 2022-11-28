import { prisma } from "@shared/database/prisma";
import { PeopleEntity } from "../entities/PeopleEntity";

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

  updatePeopleAddresses(
    peopleAdresses: UpdatePeopleAddressesDTO
  ): Promise<PeopleEntity>;
}

export class PeopleRepository implements IPeopleRepository {
  async findPeopleById({ id }: ShowPeopleDTO): Promise<PeopleEntity | null> {
    const people = await prisma.people.findUnique({
      where: {
        id,
      },
      include: {
        addresses: true,
        employee: {
          include: {
            commissionedBy: {
              include: {
                expertArea: true,
              },
            },
            department: true,
            people: true,
          },
        },
        company: true,
      },
    });

    return people;
  }

  async createUser({
    email,
    phone,
    note,
    typePerson,
    fistName,
    lastName,
    fullName,
    individualTaxIdentification,
    tradingName,
    comapanyName,
    stateRegistration,
    employerIdentificationNumber,
    isCustomer,
    isSupplier,
    isEmployee,
  }: CreatePeopleDTO): Promise<PeopleEntity> {
    const people = await prisma.people.create({
      data: {
        typePerson,
        fistName,
        lastName,
        fullName,
        individualTaxIdentification,
        comapanyName,
        tradingName,
        employerIdentificationNumber,
        stateRegistration,
        email,
        note,
        phone,
        isCustomer,
        isEmployee,
        isSupplier,
      },
      include: {
        addresses: true,
        employee: {
          include: {
            commissionedBy: {
              include: {
                expertArea: true,
              },
            },
            department: true,
            people: true,
          },
        },
        company: true,
      },
    });

    return people;
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
      include: {
        addresses: true,
        employee: {
          include: {
            commissionedBy: {
              include: {
                expertArea: true,
              },
            },
            department: true,
            people: true,
          },
        },
        company: true,
      },
    });

    return people;
  }
}
