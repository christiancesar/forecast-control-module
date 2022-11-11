import { randomUUID } from "crypto";
import { EmployeeEntity } from "../entities/EmployeeEntity";
import { CreateEmployeeDTO } from "../interfaces/CreateEmployeeDTO";

type FindUserDTO = {
  id: string;
}
interface IEmployeesRepository {
  create(data: CreateEmployeeDTO): Promise<EmployeeEntity>;
  update(employee: EmployeeEntity): Promise<EmployeeEntity>;
  findUserById(employee: FindUserDTO): Promise<EmployeeEntity | undefined>;
}

export default new class EmployeesRepository implements IEmployeesRepository {
  employees: EmployeeEntity[];

  constructor() {
    this.employees = [];
  }

  async create({ name, commissionedBy, department, salary }: CreateEmployeeDTO): Promise<EmployeeEntity> {
    const employee = new EmployeeEntity({
      id: randomUUID(),
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
  async findUserById({ id }: FindUserDTO): Promise<EmployeeEntity | undefined> {
    const employees = await this.employees.find((employee) => employee.id === id)
    return employees
  }
  async findAllServicesTypes(): Promise<EmployeeEntity[]> {
    return this.employees
  }
}