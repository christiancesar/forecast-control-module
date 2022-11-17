import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { CreateExpertAreaDTO, FindExpertAreaByIdDTO, FindExpertAreaByNameDTO, IExpertAreaRepository, UpdateEmployeeDTO } from "../interfaces/IExpertAreasRepository";

export class ExpertAreasRepository implements IExpertAreaRepository {
  createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity> {
    throw new Error("Method not implemented.");
  }
  findExpertAreaById(data: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | undefined> {
    throw new Error("Method not implemented.");
  }
  findExpertAreaByName(data: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | undefined> {
    throw new Error("Method not implemented.");
  }
  findAllExpertAreas(): Promise<ExpertAreaEntity[]> {
    throw new Error("Method not implemented.");
  }
  updateExpertArea(data: UpdateEmployeeDTO): Promise<ExpertAreaEntity> {
    throw new Error("Method not implemented.");
  }

}