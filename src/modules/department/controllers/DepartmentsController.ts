import { Request, Response } from "express";
import { DepartmentsRepository } from "../repositories/implementations/DepartmentsRepository";
import { CreateDepartmentService } from "../services/CreateDepartmentService";
import { ListDepartmentService } from "../services/ListDepartmentService";
import { ShowDepartmentService } from "../services/ShowDepartmentService";
import { UpdateDepartmentService } from "../services/UpdateDepartmentService";

export class DepartmentsController {
  constructor() { }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, commissionPercent, commissionType } = request.body;
    
    const departmentRepository = new DepartmentsRepository();
    const createDepartmentService = new CreateDepartmentService(departmentRepository);

    const department = await createDepartmentService.execute({
      name,
      description,
      commissionPercent,
      commissionType,
    });

    return response.json(department);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const departmentRepository = new DepartmentsRepository();
    const listDepartmentService = new ListDepartmentService(departmentRepository);

    const department = await listDepartmentService.execute();

    return response.json(department);

  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const departmentRepository = new DepartmentsRepository();
    const showDepartmentService = new ShowDepartmentService(departmentRepository);

    const department = await showDepartmentService.execute({ id });

    return response.json(department);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, commissionPercent, commissionType, active } = request.body;
    
    const departmentRepository = new DepartmentsRepository();
    const updateDepartmentService = new UpdateDepartmentService(departmentRepository);

    const department = await updateDepartmentService.execute({
      id,
      name,
      description,
      commissionPercent,
      commissionType,
      active,
    });

    return response.json(department);
  }
}