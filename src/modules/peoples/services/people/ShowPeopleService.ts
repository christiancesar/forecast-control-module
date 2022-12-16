import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";

type ShowPeopleParams = {
  peopleId: string;
};

export class ShowPeopleService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute({ peopleId }: ShowPeopleParams): Promise<PeopleEntity> {
    const peopleExist = await this.peopleRepository.findPeopleById({
      id: peopleId,
    });

    if (!peopleExist) {
      throw new Error("People not found");
    }

    return peopleExist;
  }
}
