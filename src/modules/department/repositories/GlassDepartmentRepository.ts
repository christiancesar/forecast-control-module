import { randomUUID } from 'crypto';
import { CreateGlassDepartmentDTO } from '../dtos/CreateGlassDepartmentDTO';
import { GlassDepartmentEntity } from '../entities/GlassDepartmentEntity';

interface IGlassDepartmentRepository {
  create(data: CreateGlassDepartmentDTO): Promise<GlassDepartmentEntity>;
}

const glassDepartmentArray: GlassDepartmentEntity[] = [];

export default new class GlassDepartmentRepository implements IGlassDepartmentRepository {
  async create({
    commissonType,
    description,
    commissionPercent,
    employee
  }: CreateGlassDepartmentDTO): Promise<GlassDepartmentEntity> {
    const glassDepartment = new GlassDepartmentEntity({
      id: randomUUID(),
      description,
      commissonType,
      commissionPercent,
      employee,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    glassDepartmentArray.push(glassDepartment);

    return glassDepartment;
  }
}