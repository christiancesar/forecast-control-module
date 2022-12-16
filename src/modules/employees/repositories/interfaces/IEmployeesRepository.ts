import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { EmployeeEntity } from "../../entities/EmployeeEntity";

export type FindEmployeeDTO = {
  id: string;
};

export type FindEmployeeByNameDTO = {
  name: string;
};

export type UpdateEmployeeDTO = {
  id: string;
  name?: string;
  salary?: number;
  active?: boolean;
  departmentId?: string;
};

export interface IEmployeesRepository {
  createEmployee(data: CreateEmployeeDTO): Promise<EmployeeEntity>;
  updateEmployee(employee: UpdateEmployeeDTO): Promise<EmployeeEntity>;
  findEmployeeById(employee: FindEmployeeDTO): Promise<EmployeeEntity | null>;
  findAllEmployees(): Promise<EmployeeEntity[]>;
}
