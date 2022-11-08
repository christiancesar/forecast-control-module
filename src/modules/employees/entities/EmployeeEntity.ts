import { CommissionedEntity } from "./CommissionedEntity";
import { DepartmentEntity } from "../../department/entities/DepartmentEntity";

export class EmployeeEntity {
  id: string;
  name: string;
  salary?: number;
  commissionedBy?: CommissionedEntity[];
  department?: DepartmentEntity;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, name, salary, department, commissionedBy, createdAt, updatedAt }: EmployeeEntity) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.commissionedBy = commissionedBy;
    this.department = department;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }


}