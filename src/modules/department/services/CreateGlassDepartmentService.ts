import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { CreateGlassDepartmentDTO } from "../dtos/CreateGlassDepartmentDTO";
import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { GlassDepartmentEntity } from "../entities/GlassDepartmentEntity";
import GlassDepartmentRepository from "../repositories/GlassDepartmentRepository";

type CreateGlassDepartmentParams = {
  description: string;
  employee?: EmployeeEntity[];
  commissionPercent?: number;
}
export class CreateGlassDepartmentService {
  async execute({
    description,
    commissionPercent,
    employee,
  }: CreateGlassDepartmentParams): Promise<GlassDepartmentEntity>{
    const glassDepartment = GlassDepartmentRepository.create({
      commissonType: CommissionTypeEnum.group,
      description,
      commissionPercent,
      employee,
    });
    return glassDepartment;
  }
}