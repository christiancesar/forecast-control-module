import Employee from "../../entities/Employee";
import ICreateEmployeeDTO from "../../interfaces/ICreateEmployeeDTO";
import EmployeesRepository from "../../repositories/EmployeesRepository";

export default class CreateEmployeeService {

  async execute({ name, commissionedBy, responsabilityId, salary }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = await EmployeesRepository.create({ name, commissionedBy, responsabilityId, salary });
    return employee
  }
}