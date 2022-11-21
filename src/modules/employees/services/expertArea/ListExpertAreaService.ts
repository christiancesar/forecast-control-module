import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { IExpertAreaRepository } from "../../repositories/interfaces/IExpertAreasRepository";

export class ListExpertAreaService {
  constructor(
    private expertAreaRepository: IExpertAreaRepository
  ) {}

  async execute(): Promise<ExpertAreaEntity[]> {
    const expertAreas = await this.expertAreaRepository.findAllExpertAreas();

    return expertAreas;
  }
}