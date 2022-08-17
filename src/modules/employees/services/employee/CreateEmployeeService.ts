import ICreateEmployeeDTO from "../../interfaces/ICreateEmployeeDTO";
import EmployeesRepository from "../../repositories/EmployeesRepository";

export default class CreateEmployeeService {

  async execute({ name, commissionedBy, salary }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = await EmployeesRepository.create({ name, commissionedBy, salary });
    return employee
  }
}