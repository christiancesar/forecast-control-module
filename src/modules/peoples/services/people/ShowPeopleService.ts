import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";

type ShowPeopleParams = {
  id: string;
};
export class ShowPeopleService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute({ id }: ShowPeopleParams): Promise<PeopleEntity> {
    const peopleExist = await this.peopleRepository.findPeopleById({ id });

    if (!peopleExist) {
      throw new Error("People not found");
    }

    return peopleExist;
  }
}
