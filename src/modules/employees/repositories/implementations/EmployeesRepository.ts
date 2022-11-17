import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { FindEmployeeByNameDTO, FindEmployeeDTO, IEmployeesRepository } from "../interfaces/IEmployeesRepository";

export class EmployeesRepository implements IEmployeesRepository {
  createEmployee(data: CreateEmployeeDTO): Promise<EmployeeEntity> {
    throw new Error("Method not implemented.");
  }
  updateEmployee(employee: EmployeeEntity): Promise<EmployeeEntity> {
    throw new Error("Method not implemented.");
  }
  findEmployeeById(employee: FindEmployeeDTO): Promise<EmployeeEntity | undefined> {
    throw new Error("Method not implemented.");
  }
  findAllEmployees(): Promise<EmployeeEntity[]> {
    throw new Error("Method not implemented.");
  }
  findEmployeeByName(employee: FindEmployeeByNameDTO): Promise<EmployeeEntity | undefined> {
    throw new Error("Method not implemented.");
  }

}