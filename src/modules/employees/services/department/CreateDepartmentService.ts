export class CreateDepartmentService {
  
  public async execute({ description }: IRequest): Promise<Department> {
    const department = await this.departmentsRepository.create({
      description,
    });

    return department;
  }
}