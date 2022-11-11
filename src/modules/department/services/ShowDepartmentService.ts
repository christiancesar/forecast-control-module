import { DepartmentEntity } from "../entities/DepartmentEntity";
import DepartmentRepository from "../repositories/DepartmentRepository";

type CreateDepartmentParams = {
  id: string;
};

export class ShowDepartmentService {
  constructor() { }

  async execute({ id }: CreateDepartmentParams): Promise<DepartmentEntity> {
    const department = await DepartmentRepository.finDepartmentById({ id });

    if (!department) {
      throw new Error("Department not found");
    }

    return department;
  }
}