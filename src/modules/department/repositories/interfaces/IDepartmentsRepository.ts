import { DepartmentEntity } from "../../entities/DepartmentEntity";

export type CreateDepartmentDTO = {
  name: string;
  description: string | null;
  commissionPercent: number | null
  commissionType: string;
};

export type FindDeparmentDTO = {
  id: string;
};

export type UpdateDepartmentDTO = {
  id: string;
  name: string;
  description: string | null;
  commissionType: string;
  commissionPercent: number | null
  active: boolean;
};

export interface IDepartmentsRepository {
  createDepartment(data: CreateDepartmentDTO): Promise<DepartmentEntity>;
  listDepartments(): Promise<DepartmentEntity[]>;
  findDepartmentById(department: FindDeparmentDTO): Promise<DepartmentEntity | null>;
  updateDepartment(department: UpdateDepartmentDTO): Promise<DepartmentEntity>;
}