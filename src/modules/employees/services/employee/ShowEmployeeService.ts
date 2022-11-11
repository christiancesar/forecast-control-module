import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type ShowEmployeeServiceParams = {
  id: string;
}

export class ShowEmployeeService {
  async execute({ id }: ShowEmployeeServiceParams): Promise<EmployeeEntity> {

    const employee = await EmployeesRepository.findById(id);
    
    if (!employee) {
      throw new Error('Employee not found');
    }

    return employee;
  }
}