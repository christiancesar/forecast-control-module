import { DepartmentEntity } from "../../../department/entities/DepartmentEntity";
import DepartmentRepository from "../../../department/repositories/DepartmentRepository";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type CreateEmployeeServiceParams = {
  name: string;
  salary: number;
  departmentId?: string;
};

export default class CreateEmployeeService {
  constructor() { }

  async execute({
    name,
    salary,
    departmentId,
  }: CreateEmployeeServiceParams): Promise<EmployeeEntity> {
    const employee = await EmployeesRepository.createEmployee({
      name,
      salary,
    });

    return employee
  }
}