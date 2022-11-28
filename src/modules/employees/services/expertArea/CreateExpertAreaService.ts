import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import { IExpertAreaRepository } from "../../repositories/interfaces/IExpertAreasRepository";

type CreateExpertAreaParams = {
  name: string;
  description: string;
};

export class CreateExpertAreaService {
  constructor(private expertAreaRepository: IExpertAreaRepository) {}

  async execute({
    name,
    description,
  }: CreateExpertAreaParams): Promise<ExpertAreaEntity> {
    const expertAreaExist =
      await this.expertAreaRepository.findExpertAreaByName({ name });

    if (expertAreaExist) {
      throw new Error("Expert Area already exists");
    }

    const expertArea = await this.expertAreaRepository.createExpertArea({
      name,
      description,
    });

    return expertArea;
  }
}
