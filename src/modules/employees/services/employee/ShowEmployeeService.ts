import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type ShowEmployeeServiceParams = {
  id: string;
}

export class ShowEmployeeService {

  constructor() {}
  
  async execute({ id }: ShowEmployeeServiceParams): Promise<EmployeeEntity> {

    const employee = await EmployeesRepository.findEmployeeById({ id });

    if (!employee) {
      throw new Error('Employee not found');
    }

    return employee;
  }
}