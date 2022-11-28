import { prisma } from "@shared/database/prisma";
import { DepartmentEntity } from "../../entities/DepartmentEntity";
import {
  CreateDepartmentDTO,
  FindDeparmentDTO,
  IDepartmentsRepository,
  UpdateDepartmentDTO,
} from "../interfaces/IDepartmentsRepository";

export class DepartmentsRepository implements IDepartmentsRepository {
  async createDepartment({
    name,
    commissionType,
    commissionPercent,
    description,
  }: CreateDepartmentDTO): Promise<DepartmentEntity> {
    const department = await prisma.department.create({
      data: {
        name,
        description,
        commissionType,
        commissionPercent,
      },
    });

    return department;
  }

  async listDepartments(): Promise<DepartmentEntity[]> {
    const departments = await prisma.department.findMany();
    return departments;
  }

  async findDepartmentById({
    id,
  }: FindDeparmentDTO): Promise<DepartmentEntity | null> {
    const department = await prisma.department.findUnique({
      where: {
        id,
      },
    });

    return department;
  }

  async updateDepartment({
    id,
    name,
    description,
    commissionType,
    commissionPercent,
    active,
  }: UpdateDepartmentDTO): Promise<DepartmentEntity> {
    const departmentUpdated = await prisma.department.update({
      data: {
        name,
        description,
        commissionType,
        commissionPercent,
        active,
      },
      where: {
        id,
      },
    });

    return departmentUpdated;
  }
}
