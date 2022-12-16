import { PeopleEntity } from "@modules/peoples/entities/PeopleEntity";
import { IPeopleRepository } from "@modules/peoples/repositories/PeopleRepository";

export class ListPeoplesService {
  constructor(private peopleRepository: IPeopleRepository) {}

  async execute(): Promise<PeopleEntity[]> {
    const peoples = await this.peopleRepository.listAllPeoples();

    return peoples;
  }
}
