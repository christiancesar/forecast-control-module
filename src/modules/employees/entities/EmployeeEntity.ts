import { CommissionedEntity } from "./CommissionedEntity";
import { DepartmentEntity } from "../../department/entities/DepartmentEntity";

export class EmployeeEntity {
  id: string;
  salary: number | null;
  active: boolean;
  commissionedBy: CommissionedEntity[];
  department: DepartmentEntity | null;
  updatedAt: Date;
  createdAt: Date;

  constructor({
    id,
    salary,
    active,
    department,
    commissionedBy,
    createdAt,
    updatedAt,
  }: EmployeeEntity) {
    this.id = id;
    this.salary = salary;
    this.commissionedBy = commissionedBy;
    this.active = active;
    this.department = department;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
