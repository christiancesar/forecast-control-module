import { randomUUID } from "crypto";
import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { DepartmentEntity } from "../entities/DepartmentEntity";

type CreateDepartmentDTO = {
  name: string;
  description?: string;
  commissionPercent?: number;
  commissonType: CommissionTypeEnum;
};

type FindDeparmentDTO = {
  id: string;
};

type UpdateDepartmentDTO = {
  id: string;
  name: string;
  description?: string;
  employees?: EmployeeEntity[];
  commissonType: CommissionTypeEnum;
  commissionPercent?: number;
  active: boolean;
};

interface IDepartmentRepository {
  createDepartment(data: CreateDepartmentDTO): Promise<DepartmentEntity>;
  listDepartments(): Promise<DepartmentEntity[]>;
  findDepartmentById(department: FindDeparmentDTO): Promise<DepartmentEntity | undefined>;
  updateDepartment(department: UpdateDepartmentDTO): Promise<DepartmentEntity>;
}

const departmentArry: DepartmentEntity[] = [];

export class DepartmentRepository implements IDepartmentRepository {
  async createDepartment({
    name,
    description,
    commissonType,
    commissionPercent
  }: CreateDepartmentDTO): Promise<DepartmentEntity> {
    const department = new DepartmentEntity({
      id: randomUUID(),
      name,
      description,
      active: true,
      commissonType,
      commissionPercent,
      employees: [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
    departmentArry.push(department);
    return department;
  }

  async listDepartments(): Promise<DepartmentEntity[]> {
    return departmentArry;
  }

  async findDepartmentById({ id }: FindDeparmentDTO): Promise<DepartmentEntity | undefined> {
    const departmentFound = departmentArry.find(department => department.id === id);
    return departmentFound;
  }

  async updateDepartment({
    id,
    active,
    commissonType,
    name,
    commissionPercent,
    description,
    employees
  }: UpdateDepartmentDTO): Promise<DepartmentEntity> {
    const departmentIndex = departmentArry.findIndex(dep => dep.id === id);
    departmentArry[departmentIndex] = {
      id: departmentArry[departmentIndex].id,
      name,
      description,
      commissonType,
      commissionPercent,
      active,
      employees: departmentArry[departmentIndex].employees,
      createdAt: departmentArry[departmentIndex].createdAt,
      updatedAt: new Date(),
    };

    return departmentArry[departmentIndex];
  }
}

export default new DepartmentRepository();