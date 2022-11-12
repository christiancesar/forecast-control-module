import { CommissionedEntity } from "../entities/CommissionedEntity";
import EmployeesRepository from "../repositories/EmployeesRepository";

type ShowCommissionedByEmployeeParams = {
  employeeId: string;
};

export class ShowCommissionedByEmployeeService {

  async execute({ employeeId }: ShowCommissionedByEmployeeParams): Promise<CommissionedEntity[]> {
    const employeeExist = await EmployeesRepository.findEmployeeById({ id: employeeId });

    if (!employeeExist) {
      throw new Error("Employee not found");
    }

    return employeeExist.commissionedBy;
  }
}