import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";

export class DepartmentEntity {
  id: string;
  name: string;
  description: string | null;
  employees?: EmployeeEntity[];
  commissionType: string | null;
  commissionPercent: number | null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    description,
    employees,
    commissionType,
    commissionPercent,
    active,
    createdAt,
    updatedAt,
  }: DepartmentEntity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.employees = employees;
    this.commissionType = commissionType;
    this.commissionPercent = commissionPercent;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
