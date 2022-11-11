import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/DepartmentRepository";

type CreateDepartmentParams = {
  name: string;
  description: string;
  commissionPercent?: number;
  commissonType: CommissionTypeEnum;
}

export class CreateDepartmentService {
  constructor() {}

  async execute(data: CreateDepartmentParams): Promise<DepartmentEntity> {
    const department = await DepartmentRepository.createDepartment(data);
    return department
  }
}