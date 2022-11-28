import { PeopleEntity } from "../../entities/PeopleEntity";
import { TypePerson } from "../../entities/TypePersonEnum";
import { IPeopleRepository } from "../../repositories/PeopleRepository";

type CreatePeopleParams = {
  email: string | null;
  phone: string[];
  note: string | null;
  typePerson: string; //Pessoa Fisica ou Juridica

  fistName: string;
  lastName: string;
  individualTaxIdentification: string | null; //CPF(ITIN)

  tradingName: string; //Nome Fantasia
  comapanyName: string; //Razão Social
  stateRegistration: string | null; //Inscrição Estadual
  employerIdentificationNumber: string | null; //CNPJ (EIN)

  isCustomer: boolean;
  isSupplier: boolean;
  isEmployee: boolean;
};

export class CreatePeopleService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute({
    email,
    phone,
    note,
    typePerson,
    fistName,
    lastName,
    individualTaxIdentification,
    tradingName,
    comapanyName,
    stateRegistration,
    employerIdentificationNumber,
    isCustomer,
    isSupplier,
    isEmployee,
  }: CreatePeopleParams): Promise<PeopleEntity> {
    let typePersonExist: TypePerson = TypePerson.NATURAL;

    switch (typePerson) {
      case "natural":
        typePersonExist = TypePerson.NATURAL;
        break;
      case "juridical":
        typePersonExist = TypePerson.JURIDICAL;
        break;
      default:
        throw new Error("Type Person not found");
    }

    const people = await this.peopleRepository.createUser({
      email,
      phone,
      note,
      typePerson: typePersonExist,
      fistName,
      lastName,
      fullName: `${fistName} ${lastName}`,
      individualTaxIdentification,
      tradingName,
      comapanyName,
      stateRegistration,
      employerIdentificationNumber,
      isCustomer,
      isSupplier,
      isEmployee,
    });

    return people;
  }
}
