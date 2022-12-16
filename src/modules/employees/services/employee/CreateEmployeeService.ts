import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";
import { IDepartmentsRepository } from "../../../department/repositories/interfaces/IDepartmentsRepository";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { IEmployeesRepository } from "../../repositories/interfaces/IEmployeesRepository";

type CreateEmployeeServiceParams = {
  peopleId: string;
  salary: number;
  departmentId: string;
};

export default class CreateEmployeeService {
  constructor(
    private departmentRepository: IDepartmentsRepository,
    private employeesRepository: IEmployeesRepository,
    private peopleRepository: IPeopleRepository
  ) {}

  async execute({
    peopleId,
    salary,
    departmentId,
  }: CreateEmployeeServiceParams): Promise<EmployeeEntity> {
    const departmentExist = await this.departmentRepository.findDepartmentById({
      id: departmentId,
    });

    if (!departmentExist) {
      throw new Error("Department not found");
    }

    const peopleExist = await this.peopleRepository.findPeopleById({
      id: peopleId,
    });

    if (!peopleExist) {
      throw new Error("People not found");
    }

    const employee = await this.employeesRepository.createEmployee({
      peopleId,
      salary,
      departmentId,
    });

    return employee;
  }
}
