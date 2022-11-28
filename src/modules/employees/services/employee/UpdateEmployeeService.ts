import { IDepartmentsRepository } from "../../../department/repositories/interfaces/IDepartmentsRepository";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { IEmployeesRepository } from "../../repositories/interfaces/IEmployeesRepository";

type UpdateEmployeeServiceParams = {
  id: string;
  name: string;
  salary: number;
  departmentId: string;
  active: boolean;
};

export class UpdateEmployeeService {
  constructor(
    private employeesRepository: IEmployeesRepository,
    private departmentsRepository: IDepartmentsRepository
  ) {}

  async execute({
    id,
    name,
    salary,
    departmentId,
    active,
  }: UpdateEmployeeServiceParams): Promise<EmployeeEntity> {
    const departmentExist = await this.departmentsRepository.findDepartmentById(
      { id: departmentId }
    );

    if (!departmentExist) {
      throw new Error("Department not found");
    }
    const employee = await this.employeesRepository.findEmployeeById({ id });

    if (!employee) {
      throw new Error("Employee not found");
    }

    const employeeUpdated = await this.employeesRepository.updateEmployee({
      id,
      active,
      departmentId,
      name,
      salary,
    });

    return employeeUpdated;
  }
}
