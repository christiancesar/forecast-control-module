import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

export class ListEmployeeService {
  async execute(): Promise<EmployeeEntity[]> {
    const employees = await EmployeesRepository.findAllEmployees();

    return employees;
  }
}
