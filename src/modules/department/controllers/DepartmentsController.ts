import { Request, Response } from "express";
import { CreateDepartmentService } from "../services/CreateDepartmentService";
import { ListDepartmentService } from "../services/ListDepartmentService";
import { ShowDepartmentService } from "../services/ShowDepartmentService";
import { UpdateDepartmentService } from "../services/UpdateDepartmentService";

export class DepartmentsController {
  constructor() { }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, commissionPercent, commissonType } = request.body;

    const createDepartmentService = new CreateDepartmentService();

    const department = await createDepartmentService.execute({
      name,
      description,
      commissionPercent,
      commissonType,
    });

    return response.json(department);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listDepartmentService = new ListDepartmentService();

    const department = await listDepartmentService.execute();

    return response.json(department);

  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDepartmentService = new ShowDepartmentService();

    const department = await showDepartmentService.execute({ id });

    return response.json(department);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, commissionPercent, commissonType, active, employeesIds } = request.body;

    const updateDepartmentService = new UpdateDepartmentService();

    const department = await updateDepartmentService.execute({
      id,
      name,
      description,
      commissionPercent,
      commissonType,
      active,
      employeesIds
    });

    return response.json(department);
  }
}