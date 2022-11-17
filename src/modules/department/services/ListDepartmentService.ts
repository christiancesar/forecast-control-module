import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentsRepository } from "../repositories/interfaces/IDepartmentsRepository";

export class ListDepartmentService {
  constructor(
    private departmentsRepository: IDepartmentsRepository
  ) {}

  async execute(): Promise<DepartmentEntity[]> {
    const departments = await this.departmentsRepository.listDepartments();
    
    return departments
  }
}