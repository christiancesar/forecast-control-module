import { Employee } from "../../entities/EmployeeEntity";
import { CreateEmployeeDTO } from "../../interfaces/CreateEmployeeDTO";
import EmployeesRepository from "../../repositories/EmployeesRepository";

export default class CreateEmployeeService {

  async execute({ name, commissionedBy, salary }: CreateEmployeeDTO): Promise<Employee> {
    const employee = await EmployeesRepository.create({ name, commissionedBy, salary });
    return employee
  }
}