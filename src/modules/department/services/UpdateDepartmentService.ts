import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import EmployeesRepository from "../../employees/repositories/EmployeesRepository";
import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/DepartmentRepository";

type UpdateDepartmentParams = {
  id: string;
  name: string;
  description?: string;
  commissonType: CommissionTypeEnum;
  commissionPercent?: number;
  active: boolean;
}

export class UpdateDepartmentService {
  constructor() { }

  async execute({
    id,
    active,
    commissonType,
    name,
    commissionPercent,
    description,
  }: UpdateDepartmentParams): Promise<DepartmentEntity> {
    const departmentExist = await DepartmentRepository.findDepartmentById({ id });

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    departmentExist.name = name ? name : departmentExist.name;
    departmentExist.description = description ? description : departmentExist.description;
    departmentExist.active = active ? active : departmentExist.active;
    departmentExist.commissonType = commissonType ? commissonType : departmentExist.commissonType;
    departmentExist.commissionPercent = commissionPercent ? commissionPercent : departmentExist.commissionPercent;


    const department = await DepartmentRepository.updateDepartment({
      id,
      active,
      commissonType,
      name,
      commissionPercent,
      description,
      
    });

    return department;
  }
}