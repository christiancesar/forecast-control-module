import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import ExpertAreaRepository from "../../repositories/ExpertAreaRepository";

type ShowExpertAreaServiceParams = {
  id: string;
};

export class ShowExpertAreaService {
  async execute({ id }: ShowExpertAreaServiceParams): Promise<ExpertAreaEntity> {
    const expertArea = await ExpertAreaRepository.findExpertAreaById({ id });

    if (!expertArea) {
      throw new Error('Expert Area not found');
    }

    return expertArea;
  }
}