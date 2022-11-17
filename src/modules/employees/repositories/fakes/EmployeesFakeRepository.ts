import { randomUUID } from "crypto";
import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { FindEmployeeByNameDTO, FindEmployeeDTO, IEmployeesRepository } from "../interfaces/IEmployeesRepository";

export default new class EmployeesFakeRepository implements IEmployeesRepository {
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
      active: true,
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