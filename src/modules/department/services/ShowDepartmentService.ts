import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/fakes/DepartmentFakeRepository";
import { IDepartmentRepository } from "../repositories/interfaces/IDepartmentRepository";

type CreateDepartmentParams = {
  id: string;
};

export class ShowDepartmentService {
  constructor(
    private departmentRepository: IDepartmentRepository
  ) { }

  async execute({ id }: CreateDepartmentParams): Promise<DepartmentEntity> {
    const department = await this.departmentRepository.findDepartmentById({ id });

    if (!department) {
      throw new Error("Department not found");
    }

    return department;
  }
}