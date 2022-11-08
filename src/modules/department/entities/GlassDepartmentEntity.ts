import { CommissionTypeEnum } from "./CommissionTypeEnum";
import { DepartmentEntity } from "./DepartmentEntity";

export class GlassDepartmentEntity extends DepartmentEntity {
  
  commissonType: CommissionTypeEnum;
  commissionPercent?: number;
  
  constructor({ id, description, employee, createdAt, updatedAt, commissonType, commissionPercent }: GlassDepartmentEntity) {
    super({ id, description, employee, createdAt, updatedAt });
    this.commissonType = commissonType;
    this.commissionPercent = commissionPercent;
  }
}