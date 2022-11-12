import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import ExpertAreaRepository from "../../repositories/ExpertAreaRepository";

type UpdateExpertAreaServiceParams = {
  id: string;
  name: string;
}

export class UpdateExpertAreaService {
  async execute({ id, name }: UpdateExpertAreaServiceParams): Promise<ExpertAreaEntity> {
    const expertArea = await ExpertAreaRepository.findExpertAreaById({ id });

    if (!expertArea) {
      throw new Error('Expert Area not found');
    }

    const expertAreaAlreadyExists = await ExpertAreaRepository.findExpertAreaByName({ name });

    if (expertAreaAlreadyExists) {
      throw new Error('Expert Area already exists');
    }

    const updatedExpertArea = await ExpertAreaRepository.updateExpertArea({ id, name, });

    return updatedExpertArea;
  }
}