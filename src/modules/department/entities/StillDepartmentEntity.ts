import { CommissionTypeEnum } from "./CommissionTypeEnum";
import { DepartmentEntity } from "./DepartmentEntity";

export class StillDepartmentEntity extends DepartmentEntity {
  commissonType: CommissionTypeEnum;

  constructor({ id, description, employee, createdAt, updatedAt, commissonType }: StillDepartmentEntity) {
    super({ id, description, employee, createdAt, updatedAt });
    this.commissonType = commissonType;
  }
}