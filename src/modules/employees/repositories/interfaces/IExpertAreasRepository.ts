import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";

export type CreateExpertAreaDTO = {
  name: string;
};

export type FindExpertAreaByNameDTO = {
  name: string;
}

export type FindExpertAreaByIdDTO = {
  id: string;
}

export type UpdateEmployeeDTO = {
  id: string;
  name: string;
}

export interface IExpertAreaRepository {
  createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity>;
  findExpertAreaById(data: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | undefined>;
  findExpertAreaByName(data: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | undefined>;
  findAllExpertAreas(): Promise<ExpertAreaEntity[]>;
  updateExpertArea(data: UpdateEmployeeDTO): Promise<ExpertAreaEntity>;
}