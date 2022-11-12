import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import ExpertAreaRepository from "../../repositories/ExpertAreaRepository";

export class ListExpertAreaService {
  async execute(): Promise<ExpertAreaEntity[]> {
    const expertAreas = await ExpertAreaRepository.findAllExpertAreas();

    return expertAreas;
  }
}