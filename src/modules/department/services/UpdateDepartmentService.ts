import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import EmployeesRepository from "../../employees/repositories/EmployeesRepository";
import { CommissionTypeEnum } from "../entities/CommissionTypeEnum";
import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/DepartmentRepository";

type UpdateDepartmentParams = {
  id: string;
  name: string;
  description?: string;
  employeesIds?: string[];
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
    employeesIds
  }: UpdateDepartmentParams): Promise<DepartmentEntity> {
    const departmentExist = await DepartmentRepository.finDepartmentById({ id });

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    const employees: EmployeeEntity[] = [];

    if (employeesIds) {
      employeesIds.map(async employeeId => {
        await EmployeesRepository.findUserById({ id: employeeId });
      });


    }

    const department = await DepartmentRepository.updateDepartment({
      id,
      active,
      commissonType,
      name,
      commissionPercent,
      description,
      employees,
      
    });

    return department;
  }
}