import { NextFunction, Request, Response } from "express";
import CreateEmployeeService from "../services/employee/CreateEmployeeService";
import { ListEmployeeService } from "../services/employee/ListEmployeesService";
import { ShowEmployeeService } from "../services/employee/ShowEmployeeService";
import { UpdateEmployeeService } from "../services/employee/UpdateEmployeeService";

export default class EmployeesController {
  async create(request: Request, response: Response, next: NextFunction) {
    const {
      name,
      salary,
      departmentId,
    } = request.body;

    const createEmployeeService = new CreateEmployeeService();
    const employee = await createEmployeeService.execute({
      name,
      salary,
      departmentId,
    });

    response.json(employee)
  }

  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const showEmployeeService = new ShowEmployeeService();
    const employee = await showEmployeeService.execute({ id });

    response.json(employee)

  }

  async list(request: Request, response: Response, next: NextFunction) {

    const listEmployeeService = new ListEmployeeService();
    const employees = await listEmployeeService.execute();

    response.json(employees);

  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const { name, salary } = request.body;

    const updateEmployeeService = new UpdateEmployeeService();
    const employee = await updateEmployeeService.execute({ id, name, salary });

    response.json(employee);




  }

}