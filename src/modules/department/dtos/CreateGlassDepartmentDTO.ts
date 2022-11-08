import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";

export type CreateGlassDepartmentDTO = {
  description: string;
  employee?: EmployeeEntity[];
  commissonType: CommissionTypeEnum;
  commissionPercent?: number;
}