import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/DepartmentRepository";

export class ListDepartmentService {
  constructor() {}

  async execute(): Promise<DepartmentEntity[]> {
    const departments = await DepartmentRepository.listDepartments();
    
    return departments
  }
}