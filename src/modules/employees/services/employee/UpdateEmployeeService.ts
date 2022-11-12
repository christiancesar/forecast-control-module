import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type UpdateEmployeeServiceParams = {
  id: string;
  name: string;
  salary: number;
}

export class UpdateEmployeeService {
  async execute({ id, name, salary }: UpdateEmployeeServiceParams): Promise<EmployeeEntity> {
    const employee = await EmployeesRepository.findEmployeeById({ id });

    if (!employee) {
      throw new Error('Employee not found');
    }

    employee.name = name;
    employee.salary = salary;

    await EmployeesRepository.updateEmployee(employee);

    return employee;
  }
}