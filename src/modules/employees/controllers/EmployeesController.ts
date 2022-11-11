import { NextFunction, Request, Response } from "express";
import CreateEmployeeService from "../services/employee/CreateEmployeeService";

export default class EmployeesController {
  async create(request: Request, response: Response, next: NextFunction) {
    const {
      name,
      salary,
      commissionedById,
      departmentId,
    } = request.body;

    const createEmployeeService = new CreateEmployeeService();
    const employee = await createEmployeeService.execute({
      name,
      salary,
      commissionedById,
      departmentId,
    });

    response.json(employee)
  }

}