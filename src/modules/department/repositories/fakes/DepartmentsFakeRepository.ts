import { randomUUID } from "crypto";
import { DepartmentEntity } from "../../entities/DepartmentEntity";
import {
  CreateDepartmentDTO,
  FindDeparmentDTO,
  IDepartmentsRepository,
  UpdateDepartmentDTO,
} from "../interfaces/IDepartmentsRepository";

export default new (class DepartmentsFakeRepository
  implements IDepartmentsRepository
{
  private departmentArry: DepartmentEntity[];

  constructor() {
    this.departmentArry = [];
  }

  async createDepartment({
    name,
    description,
    commissionType,
    commissionPercent,
  }: CreateDepartmentDTO): Promise<DepartmentEntity> {
    const department = new DepartmentEntity({
      id: randomUUID(),
      name,
      description,
      active: true,
      commissionType,
      commissionPercent,
      employees: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.departmentArry.push(department);

    return department;
  }

  async listDepartments(): Promise<DepartmentEntity[]> {
    return this.departmentArry;
  }

  async findDepartmentById({
    id,
  }: FindDeparmentDTO): Promise<DepartmentEntity | null> {
    const departmentFound = this.departmentArry.find((department) => {
      return department.id === id ? department : null;
    });

    return departmentFound as DepartmentEntity | null;
  }

  async updateDepartment({
    id,
    active,
    commissionType,
    name,
    commissionPercent,
    description,
  }: UpdateDepartmentDTO): Promise<DepartmentEntity> {
    const departmentIndex = this.departmentArry.findIndex(
      (dep) => dep.id === id
    );
    this.departmentArry[departmentIndex] = {
      id: this.departmentArry[departmentIndex].id,
      name,
      description,
      commissionType,
      commissionPercent,
      active,
      employees: this.departmentArry[departmentIndex].employees,
      createdAt: this.departmentArry[departmentIndex].createdAt,
      updatedAt: new Date(),
    };

    return this.departmentArry[departmentIndex];
  }
})();
