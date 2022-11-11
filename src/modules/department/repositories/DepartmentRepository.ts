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
  finDepartmentById(department: FindDeparmentDTO): Promise<DepartmentEntity | undefined>;
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

  async finDepartmentById({ id }: FindDeparmentDTO): Promise<DepartmentEntity | undefined> {
    const departmentFound = departmentArry.find(department => department.id === id);
    return departmentFound;
  }

  async updateDepartment(department: UpdateDepartmentDTO): Promise<DepartmentEntity> {
    const departmentIndex = departmentArry.findIndex(dep => dep.id === department.id);
    departmentArry[departmentIndex] = {
      id: departmentArry[departmentIndex].id,
      name: departmentArry[departmentIndex].name,
      description: departmentArry[departmentIndex].description,
      employees: departmentArry[departmentIndex].employees,
      commissonType: departmentArry[departmentIndex].commissonType,
      commissionPercent: departmentArry[departmentIndex].commissionPercent,
      active: departmentArry[departmentIndex].active,
      createdAt: departmentArry[departmentIndex].createdAt,
      updatedAt: new Date()
    };

    return departmentArry[departmentIndex];
  }
}

export default new DepartmentRepository();