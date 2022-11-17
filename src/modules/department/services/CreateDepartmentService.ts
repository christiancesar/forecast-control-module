import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentRepository } from "../repositories/interfaces/IDepartmentRepository";

type CreateDepartmentParams = {
  name: string;
  description: string;
  commissionPercent: number | null;
  commissionType: CommissionTypeEnum;
}

export class CreateDepartmentService {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) {}

  async execute({
    name,
    description,
    commissionType,
    commissionPercent
  }: CreateDepartmentParams): Promise<DepartmentEntity> {
    let commissionTypeExist: CommissionTypeEnum;

    switch (commissionType) {
      case 'individual':
        commissionTypeExist = CommissionTypeEnum.individual;
      break;
      case 'group':
        commissionTypeExist = CommissionTypeEnum.group;
      break;
      default:
        throw new Error("Commission type not found");
    }

    const department = await this.departmentRepository.createDepartment({
      name,
      description,
      commissionType,
      commissionPercent
    });
    return department
  }
}