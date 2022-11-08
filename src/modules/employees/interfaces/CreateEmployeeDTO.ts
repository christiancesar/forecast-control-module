import { CommissionedEntity } from "../entities/CommissionedEntity";
import { DepartmentEntity } from "../../department/entities/DepartmentEntity";

export type CreateEmployeeDTO = {
  name: string;
  salary?: number;
  commissionedBy?: CommissionedEntity[];
  department?: DepartmentEntity;
}