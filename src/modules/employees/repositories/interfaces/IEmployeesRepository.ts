import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { EmployeeEntity } from "../../entities/EmployeeEntity";

export type FindEmployeeDTO = {
  id: string;
}

export type FindEmployeeByNameDTO = {
  name: string;
};

export interface IEmployeesRepository {
  createEmployee(data: CreateEmployeeDTO): Promise<EmployeeEntity>;
  updateEmployee(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findEmployeeById(employee: FindEmployeeDTO): Promise<EmployeeEntity | undefined>;
  findAllEmployees(): Promise<EmployeeEntity[]>;
  findEmployeeByName(employee: FindEmployeeByNameDTO): Promise<EmployeeEntity | undefined>;
}