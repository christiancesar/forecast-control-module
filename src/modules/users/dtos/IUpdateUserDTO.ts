import { CompanyEntity } from "@modules/companies/entities/Company";
import { AddressEntity } from "@modules/peoples/entities/AddressEntity";

export interface IUpdateUserDTO {
  userId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  email: string;
  individualTaxNumber: string;
  password: string;
  // avatar: string;
  address: AddressEntity;
  companies: CompanyEntity[];
}
