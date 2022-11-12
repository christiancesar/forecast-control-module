import { EmployeeEntity } from "../entities/EmployeeEntity";
import CommissionedRepository from "../repositories/CommissionedRepository";
import EmployeesRepository from "../repositories/EmployeesRepository";

type DeleteEmployeeCommissionedParams = {
  id: string;
};


export class DeleteEmployeeCommissionedService {
  async execute({ id }: DeleteEmployeeCommissionedParams): Promise<EmployeeEntity> {
    const commissioned = await CommissionedRepository.softDeleteCommissioned({ id });
    const employee = await EmployeesRepository.
    return
  }
}