import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { PeopleEntityAbstract } from "./PeopleEntityAbstract";
import { TypePerson } from "./TypePersonEnum";

// Clientes, Forncedores, Funcionários

export class PeopleEntity extends PeopleEntityAbstract { 
  typePerson: TypePerson | string; //Pessoa Fisica ou Juridica
  
  fistName: string;
  lastName: string;
  fullName: string;
  individualTaxIdentification: string; //CPF(ITIN)

  tradingName: string; //Nome Fantasia
  comapanyName: string; //Razão Social
  stateRegistration: string; //Inscrição Estadual
  employerIdentificationNumber: string; //CNPJ (EIN)

  isCustomer: boolean;
  isSupplier: boolean;
  isEmployee: boolean;

  employee?: EmployeeEntity;

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
    address,
    note,
    stateRegistration,
    employerIdentificationNumber,
    isCustomer,
    isSupplier,
    isEmployee,
    employee,
    createdAt,
    updatedAt
  }: PeopleEntity) {
    super({id, email, phone, note, address, createdAt, updatedAt});

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