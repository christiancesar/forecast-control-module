import Stage from "../../entities/Stage";
import StagesRepository from "../../repositories/StagesRepository";

export default class ListStagesService {
  private stagesRepository: StagesRepository;

  constructor() {
    this.stagesRepository = new StagesRepository();
  }

  async execute(): Promise<Stage[]> {
    const stages = await this.stagesRepository.listStages();
    
    return stages;
  }
}