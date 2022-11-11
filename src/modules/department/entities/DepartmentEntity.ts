import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { CommissionTypeEnum } from "./CommissionTypeEnum";

export class DepartmentEntity {
  id: string;
  name: string;
  description?: string;
  employees?: EmployeeEntity[];
  commissonType: CommissionTypeEnum;
  commissionPercent?: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    description,
    employees,
    commissonType,
    commissionPercent,
    active,
    createdAt,
    updatedAt
  }: DepartmentEntity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.employees = employees;
    this.commissonType = commissonType;
    this.commissionPercent = commissionPercent;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}