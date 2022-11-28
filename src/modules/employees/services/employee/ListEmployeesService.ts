import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { IEmployeesRepository } from "../../repositories/interfaces/IEmployeesRepository";

export class ListEmployeeService {
  constructor(private employeesRepository: IEmployeesRepository) {}
  async execute(): Promise<EmployeeEntity[]> {
    const employees = await this.employeesRepository.findAllEmployees();

    return employees;
  }
}
