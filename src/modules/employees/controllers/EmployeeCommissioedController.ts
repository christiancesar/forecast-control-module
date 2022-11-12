import { Request, Response } from "express";
import { CreateEmployeeCommissionedService } from "../services/CreateEmployeeCommissionedService";
import { ShowCommissionedByEmployeeService } from "../services/ShowCommissionedByEmployeeService";
import { UpdateEmployeeCommissionedService } from "../services/UpdateEmployeeCommissionedService";

export class EmployeeCommissioedController {
  async create(request: Request, response: Response): Promise<Response> {
    const { employeeId, expertAreaId, commissionPercent } = request.body;

    const createEmployeeCommissionedService = new CreateEmployeeCommissionedService;

    const employee = await createEmployeeCommissionedService.execute({
      employeeId,
      expertAreaId,
      commissionPercent
    })

    return response.json(employee);

  }

  async show(request: Request, response: Response): Promise<Response> {
    const { employeeId } = request.body;

    const showCommissionedByEmployeeService = new ShowCommissionedByEmployeeService;

    const commissioned = await showCommissionedByEmployeeService.execute({ employeeId });

    return response.json(commissioned);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { commissionPercent, active } = request.body;

    const updateEmployeeCommissionedService = new UpdateEmployeeCommissionedService;

    const employee = await updateEmployeeCommissionedService.execute({ id, commissionPercent, active });

    return response.json(employee);
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEmployeeCommissionedService = new DeleteEmployeeCommissionedService;

    const employee = await deleteEmployeeCommissionedService.execute({ id });

    return response.json(employee);

  }
}