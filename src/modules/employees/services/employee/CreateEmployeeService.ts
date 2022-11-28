import { IDepartmentsRepository } from "../../../department/repositories/interfaces/IDepartmentsRepository";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { IEmployeesRepository } from "../../repositories/interfaces/IEmployeesRepository";

type CreateEmployeeServiceParams = {
  name: string;
  salary: number;
  departmentId: string;
};

export default class CreateEmployeeService {
  constructor(
    private departmentRepository: IDepartmentsRepository,
    private employeesRepository: IEmployeesRepository
  ) {}

  async execute({
    name,
    salary,
    departmentId,
  }: CreateEmployeeServiceParams): Promise<EmployeeEntity> {
    const departmentExist = await this.departmentRepository.findDepartmentById({
      id: departmentId,
    });

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    const employeeNameExist = await this.employeesRepository.findEmployeeByName(
      { name }
    );

    if (employeeNameExist) {
      throw new Error("Employee name already exist");
    }

    const employee = await this.employeesRepository.createEmployee({
      name,
      salary,
      departmentId,
    });

    return employee;
  }
}
