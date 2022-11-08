import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";

export class DepartmentEntity {
  id: string;
  description: string;
  employee?: EmployeeEntity[];
  createdAt: Date;
  updatedAt: Date;

  constructor({ id, description, employee, createdAt, updatedAt }: DepartmentEntity) {
    this.id = id;
    this.description = description;
    this.employee = employee;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}