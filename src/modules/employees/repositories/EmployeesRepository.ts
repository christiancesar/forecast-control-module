import { randomUUID } from "crypto";
import { EmployeeEntity } from "../entities/EmployeeEntity";
import { CreateEmployeeDTO } from "../interfaces/CreateEmployeeDTO";

interface IEmployeesRepository {
  create(data: CreateEmployeeDTO): Promise<EmployeeEntity>;
  update(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findById(employeeId: string): Promise<EmployeeEntity | undefined>;
  findAllServicesTypes(): Promise<EmployeeEntity[]>;
}

export default new class EmployeesRepository implements IEmployeesRepository {
  employees: EmployeeEntity[];

  constructor() {
    this.employees = [];
  }

  async create({ name, commissionedBy, department, salary }: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = new EmployeeEntity({
      id: randomUUID() ,
      name,
      salary,
      commissionedBy,
      department,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.employees.push(employee);
    
    return employee
  }
  async update(employee: EmployeeEntity): Promise<EmployeeEntity> {
    const employeeIndex = this.employees.findIndex((employee: EmployeeEntity) => employee === employee)
    this.employees[employeeIndex] = employee;
    return this.employees[employeeIndex]
  }
  async findById(id: string): Promise<EmployeeEntity | undefined> {
    const employees = await this.employees.find((employee) => employee.id === id)
    return employees
  }
  async findAllServicesTypes(): Promise<EmployeeEntity[]> {
    return this.employees
  }
}