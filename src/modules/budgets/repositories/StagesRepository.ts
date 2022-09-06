import { prisma } from "../../../../prisma";
import Stage from "../entities/Stage";

interface ICreateStage {
  description: string;
}
interface IStagesRepository {
  create(data: ICreateStage): Promise<Stage>;
  listStages(): Promise<Stage[]>;
}

export default class StageRepository implements IStagesRepository {
  async create({ description }: ICreateStage): Promise<Stage> {
    const stage = await prisma.stage.create({
      data: {
        description,
      }
    })

    return stage;
  }
  async listStages(): Promise<Stage[]> {
    const stages = await prisma.stage.findMany();
    return stages;
  }
}