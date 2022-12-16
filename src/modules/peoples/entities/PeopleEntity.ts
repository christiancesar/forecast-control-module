import { CompanyEntity } from "@modules/companies/entities/Company";
import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { PeopleEntityAbstract } from "./PeopleEntityAbstract";

// Clientes, Forncedores, Funcionários

export class PeopleEntity extends PeopleEntityAbstract {
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

  employee?: EmployeeEntity | null;

  constructor({
    id,
    typePerson,
    fistName,
    lastName,
    individualTaxIdentification,
    tradingName,
    comapanyName,
    email,
    phone,
    addresses,
    note,
    stateRegistration,
    employerIdentificationNumber,
    isCustomer,
    isSupplier,
    isEmployee,
    employee,
    createdAt,
    updatedAt,
  }: PeopleEntity) {
    super({ id, email, phone, note, addresses, createdAt, updatedAt });

    this.typePerson = typePerson;
    this.fistName = fistName;
    this.lastName = lastName;
    this.fullName = `${fistName} ${lastName}`;
    this.individualTaxIdentification = individualTaxIdentification;
    this.tradingName = tradingName;
    this.comapanyName = comapanyName;
    this.stateRegistration = stateRegistration;
    this.employerIdentificationNumber = employerIdentificationNumber;
    this.isCustomer = isCustomer;
    this.isSupplier = isSupplier;
    this.isEmployee = isEmployee;
    this.employee = employee;
  }
}
