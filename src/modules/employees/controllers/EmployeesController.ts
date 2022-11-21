import { NextFunction, Request, Response } from "express";
import { DepartmentsRepository } from "../../department/repositories/implementations/DepartmentsRepository";
import { EmployeesRepository } from "../repositories/implementations/EmployeesRepository";
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

    const departmentRepository = new DepartmentsRepository();
    const employeesRepository = new EmployeesRepository();
    const createEmployeeService = new CreateEmployeeService(departmentRepository, employeesRepository);

    const employee = await createEmployeeService.execute({
      name,
      salary,
      departmentId,
    });

    response.json(employee)
  }

  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const employeesRepository = new EmployeesRepository();
    const showEmployeeService = new ShowEmployeeService(employeesRepository);

    const employee = await showEmployeeService.execute({ id });

    response.json(employee)

  }

  async list(request: Request, response: Response, next: NextFunction) {

    const employeesRepository = new EmployeesRepository();
    const listEmployeeService = new ListEmployeeService(employeesRepository);

    const employees = await listEmployeeService.execute();

    response.json(employees);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const { name, salary, active, departmentId } = request.body;

    const employeesRepository = new EmployeesRepository();
    const departmentsRepository = new DepartmentsRepository();
    const updateEmployeeService = new UpdateEmployeeService(employeesRepository,
      departmentsRepository);

    const employee = await updateEmployeeService.execute({ id, name, salary, active, departmentId });

    response.json(employee);
  }

}