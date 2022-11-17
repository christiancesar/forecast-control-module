import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentRepository } from "../repositories/interfaces/IDepartmentRepository";

type UpdateDepartmentParams = {
  id: string;
  name: string;
  description: string | null;
  commissionType: string;
  commissionPercent: number | null;
  active: boolean;
}

export class UpdateDepartmentService {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute({
    id,
    active,
    commissionType,
    name,
    commissionPercent,
    description,
  }: UpdateDepartmentParams): Promise<DepartmentEntity> {
    const departmentExist = await this.departmentRepository.findDepartmentById({ id });

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    departmentExist.name = name ? name : departmentExist.name;
    departmentExist.description = description ? description : departmentExist.description;
    departmentExist.active = active ? active : departmentExist.active;
    departmentExist.commissionType = commissionType ? commissionType : departmentExist.commissionType;
    departmentExist.commissionPercent = commissionPercent ? commissionPercent : departmentExist.commissionPercent;


    const department = await this.departmentRepository.updateDepartment({
      id,
      active,
      commissionType,
      name,
      commissionPercent,
      description,      
    });

    return department;
  }
}