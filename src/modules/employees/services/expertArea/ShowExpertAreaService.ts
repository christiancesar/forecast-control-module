import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { IExpertAreaRepository } from "../../repositories/interfaces/IExpertAreasRepository";

type ShowExpertAreaServiceParams = {
  id: string;
};

export class ShowExpertAreaService {
  constructor(
    private expertAreaRepository: IExpertAreaRepository
  ) {}
  async execute({ id }: ShowExpertAreaServiceParams): Promise<ExpertAreaEntity> {
    const expertArea = await this.expertAreaRepository.findExpertAreaById({ id });

    if (!expertArea) {
      throw new Error('Expert Area not found');
    }

    return expertArea;
  }
}