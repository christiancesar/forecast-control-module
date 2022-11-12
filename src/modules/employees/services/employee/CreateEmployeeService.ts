import { DepartmentEntity } from "../../../department/entities/DepartmentEntity";
import DepartmentRepository from "../../../department/repositories/DepartmentRepository";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type CreateEmployeeServiceParams = {
  name: string;
  salary: number;
  departmentId: string;
};

export default class CreateEmployeeService {
  constructor() { }

  async execute({
    name,
    salary,
    departmentId,
  }: CreateEmployeeServiceParams): Promise<EmployeeEntity> {
    const departmentExist = await DepartmentRepository.findDepartmentById({ id: departmentId });
    
    if (!departmentExist) {
      throw new Error("Department not found");
    }

    const employeeNameExist = await EmployeesRepository.findEmployeeByName({ name });

    if (employeeNameExist) {
      throw new Error("Employee name already exist");
    }

    const employee = await EmployeesRepository.createEmployee({
      name,
      salary,
      department: departmentExist
    });

    return employee
  }
}