import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentRepository } from "../repositories/interfaces/IDepartmentRepository";

export class ListDepartmentService {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) {}

  async execute(): Promise<DepartmentEntity[]> {
    const departments = await this.departmentRepository.listDepartments();
    
    return departments
  }
}