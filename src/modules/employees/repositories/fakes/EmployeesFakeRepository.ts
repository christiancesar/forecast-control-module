import DepartmentsFakeRepository from "@modules/department/repositories/fakes/DepartmentsFakeRepository";
import { randomUUID } from "crypto";
import { CreateEmployeeDTO } from "../../dtos/CreateEmployeeDTO";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import {
  FindEmployeeByNameDTO,
  FindEmployeeDTO,
  IEmployeesRepository,
  UpdateEmployeeDTO,
} from "../interfaces/IEmployeesRepository";

export default new (class EmployeesFakeRepository
  implements IEmployeesRepository
{
  employees: EmployeeEntity[];

  constructor() {
    this.employees = [];
  }

  async createEmployee({
    name,
    salary,
    departmentId,
  }: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const department = await DepartmentsFakeRepository.findDepartmentById({
      id: departmentId,
    });

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

    return employee;
  }

  async updateEmployee({
    id,
    active,
    name,
    salary,
  }: UpdateEmployeeDTO): Promise<EmployeeEntity> {
    const employeeIndex = await this.employees.findIndex(
      (employee: EmployeeEntity) => employee.id === id
    );

    this.employees[employeeIndex].name = !name
      ? this.employees[employeeIndex].name
      : name;

    this.employees[employeeIndex].salary = !salary
      ? this.employees[employeeIndex].salary
      : salary;

    this.employees[employeeIndex].active = !active
      ? this.employees[employeeIndex].active
      : active;

    return this.employees[employeeIndex];
  }

  async findEmployeeById({
    id,
  }: FindEmployeeDTO): Promise<EmployeeEntity | null> {
    const employees = (await this.employees.find(
      (employee) => employee.id === id
    )) as EmployeeEntity | null;

    return employees;
  }

  async findAllEmployees(): Promise<EmployeeEntity[]> {
    return this.employees;
  }

  async findEmployeeByName({
    name,
  }: FindEmployeeByNameDTO): Promise<EmployeeEntity | null> {
    const employees = (await this.employees.find(
      (employee) => employee.name === name
    )) as EmployeeEntity | null;

    return employees;
  }
})();
