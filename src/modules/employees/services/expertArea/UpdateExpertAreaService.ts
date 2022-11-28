import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { IExpertAreaRepository } from "../../repositories/interfaces/IExpertAreasRepository";

type UpdateExpertAreaServiceParams = {
  id: string;
  name: string;
};

export class UpdateExpertAreaService {
  constructor(private expertAreaRepository: IExpertAreaRepository) {}

  async execute({
    id,
    name,
  }: UpdateExpertAreaServiceParams): Promise<ExpertAreaEntity> {
    const expertArea = await this.expertAreaRepository.findExpertAreaById({
      id,
    });

    if (!expertArea) {
      throw new Error("Expert Area not found");
    }

    const expertAreaAlreadyExists =
      await this.expertAreaRepository.findExpertAreaByName({ name });

    if (expertAreaAlreadyExists) {
      throw new Error("Expert Area already exists");
    }

    const updatedExpertArea = await this.expertAreaRepository.updateExpertArea({
      id,
      name,
    });

    return updatedExpertArea;
  }
}
