import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";

type PeopleView = Partial<PeopleEntity>;

export default new (class PeopleViewMapper {
  toView(people: PeopleEntity): PeopleView {
    return {
      id: people.id,
      email: people.email,
      phone: people.phone,
      note: people.note,
      fistName: people.fistName,
      lastName: people.lastName,
      fullName: people.fullName,
      individualTaxIdentification: people.individualTaxIdentification,
      isEmployee: people.isEmployee,
      employee: people.employee,
      addresses: people.addresses,
      createdAt: people.createdAt,
      updatedAt: people.updatedAt,
    };
  }
})();
