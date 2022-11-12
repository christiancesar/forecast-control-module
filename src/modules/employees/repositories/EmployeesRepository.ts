import { randomUUID } from "crypto";
import { EmployeeEntity } from "../entities/EmployeeEntity";
import { CreateEmployeeDTO } from "../interfaces/CreateEmployeeDTO";

type FindEmployeeDTO = {
  id: string;
}

type FindEmployeeByNameDTO = {
  name: string;
};

interface IEmployeesRepository {
  createEmployee(data: CreateEmployeeDTO): Promise<EmployeeEntity>;
  updateEmployee(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findEmployeeById(employee: FindEmployeeDTO): Promise<EmployeeEntity | undefined>;
  findAllEmployees(): Promise<EmployeeEntity[]>;
  findEmployeeByName(employee: FindEmployeeByNameDTO): Promise<EmployeeEntity | undefined>;
}

export default new class EmployeesRepository implements IEmployeesRepository {
  employees: EmployeeEntity[];

  constructor() {
    this.employees = [];
  }

  async createEmployee({ name, department, salary }: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = new EmployeeEntity({
      id: randomUUID(),
      name,
      salary,
      department,
      commissionedBy: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.employees.push(employee);

    return employee
  }

  async updateEmployee(employee: EmployeeEntity): Promise<EmployeeEntity> {
    const employeeIndex = await this.employees.findIndex((employee: EmployeeEntity) => employee === employee)
    this.employees[employeeIndex] = employee;
    return this.employees[employeeIndex]
  }

  async findEmployeeById({ id }: FindEmployeeDTO): Promise<EmployeeEntity | undefined> {
    const employees = await this.employees.find((employee) => employee.id === id)
    return employees
  }

  async findAllEmployees(): Promise<EmployeeEntity[]> {
    return this.employees;
  }

  async findEmployeeByName({ name }: FindEmployeeByNameDTO): Promise<EmployeeEntity | undefined> {
    const employees = await this.employees.find((employee) => employee.name === name)
    return employees
  }

}