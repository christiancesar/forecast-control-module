import Employee from "../entities/Employee";
import ICreateEmployeeDTO from "../interfaces/ICreateEmployeeDTO";

interface IEmployeesRepository {
  create(data: ICreateEmployeeDTO): Promise<Employee>;
  update(employee: Employee): Promise<Employee>;
  findById(employeeId: string): Promise<Employee | undefined>;
  findAllServicesTypes(): Promise<Employee[]>;
}

class EmployeesRepository implements IEmployeesRepository {
  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  async create({ name, commissionedBy, salary }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = new Employee({ name, salary, commissionedBy });
    this.employees.push(employee);
    return employee
  }
  async update(employee: Employee): Promise<Employee> {
    const employeeIndex = this.employees.findIndex((employee: Employee) => employee === employee)
    this.employees[employeeIndex] = employee;
    return this.employees[employeeIndex]
  }
  async findById(id: string): Promise<Employee | undefined> {
    const employees = await this.employees.find((employee) => employee.id === id)
    return employees
  }
  async findAllServicesTypes(): Promise<Employee[]> {
    return this.employees
  }
}

export default new EmployeesRepository()