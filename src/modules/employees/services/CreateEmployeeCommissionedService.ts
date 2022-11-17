import { EmployeeEntity } from "../entities/EmployeeEntity";
import CommissionedRepository from "../repositories/fakes/CommissionedFakeRepository";
import EmployeesRepository from "../repositories/EmployeesRepository";
import ExpertAreaRepository from "../repositories/ExpertAreaRepository";

type UpdateEmployeeCommissioned = {
  employeeId: string;
  expertAreaId: string,
  commissionPercent: number
};

export class CreateEmployeeCommissionedService {
 
  async execute({
    employeeId,
    commissionPercent,
    expertAreaId
  }: UpdateEmployeeCommissioned): Promise<EmployeeEntity> {
    const expertAreaExist = await ExpertAreaRepository.findExpertAreaById({ id: expertAreaId });

    if (!expertAreaExist) {
      throw new Error("Expert area not found");
    }

    const employeeExist =  await EmployeesRepository.findEmployeeById({ id: employeeId });

    if (!employeeExist) {
      throw new Error("Employee not found");
    }

    const commissioned = await CommissionedRepository.createCommissioned({
      commissionPercent,
      expertAreaId
    })
    
    employeeExist.commissionedBy?.push(commissioned);

    const employee = await EmployeesRepository.updateEmployee(employeeExist);

    return employee;
  }
}