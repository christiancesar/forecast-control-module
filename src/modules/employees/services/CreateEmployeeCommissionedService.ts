import { EmployeeEntity } from "../entities/EmployeeEntity";
import { ICommissionedRepository } from "../repositories/interfaces/ICommissionedRepository";
import { IEmployeesRepository } from "../repositories/interfaces/IEmployeesRepository";
import { IExpertAreaRepository } from "../repositories/interfaces/IExpertAreasRepository";

type UpdateEmployeeCommissioned = {
  employeeId: string;
  expertAreaId: string;
  commissionPercent: number;
};

export class CreateEmployeeCommissionedService {
  constructor(
    private expertAreaRepository: IExpertAreaRepository,
    private commissionedRepository: ICommissionedRepository,
    private employeesRepository: IEmployeesRepository
  ) {}

  async execute({
    employeeId,
    commissionPercent,
    expertAreaId,
  }: UpdateEmployeeCommissioned): Promise<EmployeeEntity> {
    const expertAreaExist = await this.expertAreaRepository.findExpertAreaById({
      id: expertAreaId,
    });

    if (!expertAreaExist) {
      throw new Error("Expert area not found");
    }

    const employeeExist = await this.employeesRepository.findEmployeeById({
      id: employeeId,
    });

    if (!employeeExist) {
      throw new Error("Employee not found");
    }

    await this.commissionedRepository.createCommissioned({
      commissionPercent,
      expertAreaId,
      employeeId,
    });

    const employee = await this.employeesRepository.findEmployeeById({
      id: employeeId,
    });

    return employee!;
  }
}
