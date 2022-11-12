import { randomUUID } from "crypto";
import { ExpertAreaEntity } from "../entities/ExpertAreaEntity";

type CreateExpertAreaDTO = {
  name: string;
};

type FindExpertAreaByNameDTO = {
  name: string;
}

type FindExpertAreaByIdDTO = {
  id: string;
}

type UpdateEmployeeDTO = {
  id: string;
  name: string;
}

interface IExpertAreaRepository {
  createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity>;
  findExpertAreaById(data: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | undefined>;
  findExpertAreaByName(data: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | undefined>;
  findAllExpertAreas(): Promise<ExpertAreaEntity[]>;
  updateExpertArea(data: UpdateEmployeeDTO): Promise<ExpertAreaEntity>;
}

const expertAreaArray: ExpertAreaEntity[] = [];

class ExpertAreaRepository implements IExpertAreaRepository {
  async createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity> {
    const expertArea = new ExpertAreaEntity({
      id: randomUUID(),
      name: data.name,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    expertAreaArray.push(expertArea);

    return expertArea;
  }

  async findExpertAreaByName(data: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | undefined> {
    const expertArea = expertAreaArray.find(expertArea => expertArea.name === data.name);

    return expertArea;
  }

  async findAllExpertAreas(): Promise<ExpertAreaEntity[]> {
    return expertAreaArray;
  }

  async findExpertAreaById(data: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | undefined> {
    const expertArea = expertAreaArray.find(expertArea => expertArea.id === data.id);

    return expertArea;
  }

  async updateExpertArea(data: UpdateEmployeeDTO): Promise<ExpertAreaEntity> {
    const expertAreaIndex = expertAreaArray.findIndex(expertArea => expertArea.id === data.id);

    const updatedExpertArea = {
      id: data.id,
      name: data.name,
      createdAt: expertAreaArray[expertAreaIndex].createdAt,
      updatedAt: new Date()
    } as ExpertAreaEntity;

    expertAreaArray[expertAreaIndex] = updatedExpertArea;

    return updatedExpertArea;



  }
}

export default new ExpertAreaRepository();  