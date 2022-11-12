import { DepartmentEntity } from "../../department/entities/DepartmentEntity";

export type CreateEmployeeDTO = {
  name: string;
  salary?: number;
  department: DepartmentEntity;
}