import { PeopleEntity } from "../../peoples/entities/PeopleEntity"

export class CompanyEntity extends PeopleEntity {
  constructor({ id, taxIdentification, email, phone, address, createdAt, updatedAt }: CompanyEntity) {
    super({ id, taxIdentification, email, phone, address, createdAt, updatedAt });
  }
}