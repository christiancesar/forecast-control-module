import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";

export type CreateExpertAreaDTO = {
  name: string;
  description: string | null;
};

export type FindExpertAreaByNameDTO = {
  name: string;
};

export type FindExpertAreaByIdDTO = {
  id: string;
};

export type UpdateExpertAreaDTO = {
  id: string;
  name: string;
};

export interface IExpertAreaRepository {
  createExpertArea(data: CreateExpertAreaDTO): Promise<ExpertAreaEntity>;
  findExpertAreaById(
    data: FindExpertAreaByIdDTO
  ): Promise<ExpertAreaEntity | null>;
  findExpertAreaByName(
    data: FindExpertAreaByNameDTO
  ): Promise<ExpertAreaEntity | null>;
  findAllExpertAreas(): Promise<ExpertAreaEntity[]>;
  updateExpertArea(data: UpdateExpertAreaDTO): Promise<ExpertAreaEntity>;
}
