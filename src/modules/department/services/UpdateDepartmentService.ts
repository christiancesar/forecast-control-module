import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentsRepository } from "../repositories/interfaces/IDepartmentsRepository";

type UpdateDepartmentParams = {
  id: string;
  name: string;
  description: string | null;
  commissionType: string;
  commissionPercent: number | null;
  active: boolean;
};

export class UpdateDepartmentService {
  constructor(private departmentsRepository: IDepartmentsRepository) {}

  async execute({
    id,
    active,
    commissionType,
    name,
    commissionPercent,
    description,
  }: UpdateDepartmentParams): Promise<DepartmentEntity> {
    const departmentExist = await this.departmentsRepository.findDepartmentById(
      { id }
    );

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    departmentExist.name = name ? name : departmentExist.name;
    departmentExist.description = description
      ? description
      : departmentExist.description;
    departmentExist.active = active ? active : departmentExist.active;
    departmentExist.commissionType = commissionType
      ? commissionType
      : departmentExist.commissionType;
    departmentExist.commissionPercent = commissionPercent
      ? commissionPercent
      : departmentExist.commissionPercent;

    const department = await this.departmentsRepository.updateDepartment({
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
