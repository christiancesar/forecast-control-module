import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { IEmployeesRepository } from "../../repositories/interfaces/IEmployeesRepository";

type ShowEmployeeServiceParams = {
  id: string;
}

export class ShowEmployeeService {

  constructor(
    private employeesRepository: IEmployeesRepository
  ) {}
  
  async execute({ id }: ShowEmployeeServiceParams): Promise<EmployeeEntity> {

    const employee = await this.employeesRepository.findEmployeeById({ id });

    if (!employee) {
      throw new Error('Employee not found');
    }

    return employee;
  }
}