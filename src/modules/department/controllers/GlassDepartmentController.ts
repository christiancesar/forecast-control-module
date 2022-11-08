import { NextFunction, Request, Response } from "express";
import { CreateGlassDepartmentService } from '../services/CreateGlassDepartmentService';
const createGlassDepartmentService = new CreateGlassDepartmentService;

export class GlassDepartmentController {
  async index(request: Request, response: Response, next: NextFunction) {
    const {
      description,
      commissionPercent,
      employee,
    } = request.body;

    const glassDepartment = createGlassDepartmentService.execute({
      description,
      commissionPercent,
      employee,
    });

    return glassDepartment;
  }
}