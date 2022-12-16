import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import {
  Address,
  Commissioned,
  Department,
  Employee,
  ExpertArea,
  People,
} from "@prisma/client";

export default new (class PrismaPeopleMapper {
  toDomain(
    peoplePrisma:
      | (People & {
          addresses: Address[];
          employee:
            | (Employee & {
                commissionedBy: (Commissioned & {
                  expertArea: ExpertArea;
                })[];
                department: Department | null;
              })
            | null;
        })
      | null
  ): PeopleEntity | null;

  toDomain(
    peoplePrisma:
      | People & {
          addresses: Address[];
          employee:
            | (Employee & {
                commissionedBy: (Commissioned & {
                  expertArea: ExpertArea;
                })[];
                department: Department | null;
              })
            | null;
        }
  ): PeopleEntity;

  toDomain(
    peoplePrisma:
      | (People & {
          addresses: Address[];
          employee:
            | (Employee & {
                commissionedBy: (Commissioned & {
                  expertArea: ExpertArea;
                })[];
                department: Department | null;
              })
            | null;
        })
      | null
  ): PeopleEntity | null {
    if (!peoplePrisma) {
      return null;
    }

    return {
      id: peoplePrisma.id,
      typePerson: peoplePrisma.typePerson,
      fistName: peoplePrisma.fistName,
      lastName: peoplePrisma.lastName,
      fullName: peoplePrisma.fullName,
      individualTaxIdentification: peoplePrisma.individualTaxIdentification,
      comapanyName: peoplePrisma.comapanyName,
      tradingName: peoplePrisma.tradingName,
      employerIdentificationNumber: peoplePrisma.employerIdentificationNumber,
      isCustomer: peoplePrisma.isCustomer,
      isSupplier: peoplePrisma.isSupplier,
      isEmployee: peoplePrisma.isEmployee,
      email: peoplePrisma.email,
      phone: peoplePrisma.phone,
      note: peoplePrisma.note,
      addresses: peoplePrisma.addresses,
      employee: !peoplePrisma.employee
        ? null
        : {
            name: peoplePrisma.fullName,
            ...peoplePrisma.employee,
          },
      createdAt: peoplePrisma.createdAt,
      stateRegistration: peoplePrisma.stateRegistration,
      updatedAt: peoplePrisma.updatedAt,
    };
  }
})();
