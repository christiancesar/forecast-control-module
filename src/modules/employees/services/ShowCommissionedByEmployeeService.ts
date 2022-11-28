import { CommissionedEntity } from "../entities/CommissionedEntity";
import { ICommissionedRepository } from "../repositories/interfaces/ICommissionedRepository";
import { IEmployeesRepository } from "../repositories/interfaces/IEmployeesRepository";

type ShowCommissionedByEmployeeParams = {
  employeeId: string;
};

export class ShowCommissionedByEmployeeService {
  constructor(
    private employeesRepository: IEmployeesRepository,
    private commissionedRepository: ICommissionedRepository
  ) {}
  async execute({
    employeeId,
  }: ShowCommissionedByEmployeeParams): Promise<CommissionedEntity[]> {
    const employeeExist = await this.employeesRepository.findEmployeeById({
      id: employeeId,
    });

    if (!employeeExist) {
      throw new Error("Employee not found");
    }

    const commissioned =
      await this.commissionedRepository.showCommissionedByEmployee({
        employeeId,
      });

    return commissioned;
  }
}
