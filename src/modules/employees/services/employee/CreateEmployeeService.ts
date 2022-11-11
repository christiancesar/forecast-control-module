import { CommissionedEntity } from "../../entities/CommissionedEntity";
import { EmployeeEntity } from "../../entities/EmployeeEntity";
import { CreateEmployeeDTO } from "../../interfaces/CreateEmployeeDTO";
import EmployeesRepository from "../../repositories/EmployeesRepository";

type CreateEmployeeServiceParams = {
  name: string;
  salary: number;
  commissionedById?: string;
  departmentId?: string;
};

export default class CreateEmployeeService {
  constructor() {}

  async execute({ 
    name, 
    salary, 
    departmentId, 
    commissionedById 
  }: CreateEmployeeServiceParams): Promise<EmployeeEntity> {
    const commissionedBy = await CommissionedRepository.findCommissionedById(commissionedById);
    const department = await DepartmentRepository.findDepartmentById(departmentId);

    const employee = await EmployeesRepository.create({ name, salary, commissionedBy, department });
    return employee
  }
}