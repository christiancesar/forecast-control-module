import { Request, Response } from "express";
import { CommissionedRepository } from "../repositories/implementations/CommissionedRepository";
import { EmployeesRepository } from "../repositories/implementations/EmployeesRepository";
import { ExpertAreasRepository } from "../repositories/implementations/ExpertAreasRepository";
import { CreateEmployeeCommissionedService } from "../services/CreateEmployeeCommissionedService";
import { ShowCommissionedByEmployeeService } from "../services/ShowCommissionedByEmployeeService";
import { UpdateEmployeeCommissionedService } from "../services/UpdateEmployeeCommissionedService";

export class EmployeeCommissioedController {
  async create(request: Request, response: Response): Promise<Response> {
    const { employeeId, expertAreaId, commissionPercent } = request.body;

    const employeesRepository = new EmployeesRepository();
    const commissionedRepository = new CommissionedRepository();
    const expertAreaRepository = new ExpertAreasRepository();

    const createEmployeeCommissionedService =
      new CreateEmployeeCommissionedService(
        expertAreaRepository,
        commissionedRepository,
        employeesRepository
      );

    const employee = await createEmployeeCommissionedService.execute({
      employeeId,
      expertAreaId,
      commissionPercent,
    });

    return response.json(employee);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { employeeId } = request.body;

    const employeesRepository = new EmployeesRepository();
    const commissionedRepository = new CommissionedRepository();
    const showCommissionedByEmployeeService =
      new ShowCommissionedByEmployeeService(
        employeesRepository,
        commissionedRepository
      );

    const commissioned = await showCommissionedByEmployeeService.execute({
      employeeId,
    });

    return response.json(commissioned);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { commissionPercent, active } = request.body;

    const commissionedRepository = new CommissionedRepository();
    const updateEmployeeCommissionedService =
      new UpdateEmployeeCommissionedService(commissionedRepository);

    const employee = await updateEmployeeCommissionedService.execute({
      id,
      commissionPercent,
      active,
    });

    return response.json(employee);
  }
}
