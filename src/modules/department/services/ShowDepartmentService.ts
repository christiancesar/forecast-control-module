import { DepartmentEntity } from "../entities/DepartmentEntity";
import { IDepartmentsRepository } from "../repositories/interfaces/IDepartmentsRepository";

type CreateDepartmentParams = {
  id: string;
};

export class ShowDepartmentService {
  constructor(private departmentsRepository: IDepartmentsRepository) {}

  async execute({ id }: CreateDepartmentParams): Promise<DepartmentEntity> {
    const department = await this.departmentsRepository.findDepartmentById({
      id,
    });

    if (!department) {
      throw new Error("Department not found");
    }

    return department;
  }
}
