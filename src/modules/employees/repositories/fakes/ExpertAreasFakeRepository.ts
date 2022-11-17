import { randomUUID } from "crypto";
import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { CreateExpertAreaDTO, FindExpertAreaByIdDTO, FindExpertAreaByNameDTO, IExpertAreaRepository, UpdateEmployeeDTO } from "../interfaces/IExpertAreasRepository";

export default new class ExpertAreasFakeRepository implements IExpertAreaRepository {
  constructor(
    private expertAreaArray: ExpertAreaEntity[] = []
  ){}
  async createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity> {
    const expertArea = new ExpertAreaEntity({
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    this.expertAreaArray.push(expertArea);

    return expertArea;
  }

  async findExpertAreaByName(data: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | undefined> {
    const expertArea = this.expertAreaArray.find(expertArea => expertArea.name === data.name);

    return expertArea;
  }

  async findAllExpertAreas(): Promise<ExpertAreaEntity[]> {
    return this.expertAreaArray;
  }

  async findExpertAreaById(data: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | undefined> {
    const expertArea = this.expertAreaArray.find(expertArea => expertArea.id === data.id);

    return expertArea;
  }

  async updateExpertArea(data: UpdateEmployeeDTO): Promise<ExpertAreaEntity> {
    const expertAreaIndex = this.expertAreaArray.findIndex(expertArea => expertArea.id === data.id);

    const updatedExpertArea = {
      id: data.id,
      name: data.name,
      createdAt: this.expertAreaArray[expertAreaIndex].createdAt,
      updatedAt: new Date()
    } as ExpertAreaEntity;

    this.expertAreaArray[expertAreaIndex] = updatedExpertArea;

    return updatedExpertArea;



  }
}
