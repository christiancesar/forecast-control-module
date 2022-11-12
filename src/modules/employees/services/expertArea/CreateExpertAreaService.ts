import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import ExpertAreaRepository from "../../repositories/ExpertAreaRepository";

type CreateExpertAreaParams = {
  name: string;
}

export class CreateExpertAreaService {
  constructor() { }

  async execute({
    name,
  }: CreateExpertAreaParams): Promise<ExpertAreaEntity> {
    const expertAreaExist = await ExpertAreaRepository.findExpertAreaByName({ name });

    if (expertAreaExist) {
      throw new Error("Expert Area already exists");
    }

    const expertArea = await ExpertAreaRepository.createExpertArea({
      name,
    });

    return expertArea;
  }
}