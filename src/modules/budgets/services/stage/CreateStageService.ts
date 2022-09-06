import Stage from "../../entities/Stage";
import StagesRepository from "../../repositories/StagesRepository";

interface ICreateStageRequest {
  description: string;
}

export default class CreateStageService {
  private stagesRepository: StagesRepository;

  constructor() {
    this.stagesRepository = new StagesRepository();
  }

  async execute({ description }: ICreateStageRequest): Promise<Stage> {
    const stage = await this.stagesRepository.create({
      description
    })
    
    return stage;
  }
}