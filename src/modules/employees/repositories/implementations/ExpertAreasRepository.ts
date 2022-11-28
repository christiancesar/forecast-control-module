import { prisma } from "@shared/database/prisma";
import { ExpertAreaEntity } from "../../entities/ExpertAreaEntity";
import {
  CreateExpertAreaDTO,
  FindExpertAreaByIdDTO,
  FindExpertAreaByNameDTO,
  IExpertAreaRepository,
  UpdateExpertAreaDTO,
} from "../interfaces/IExpertAreasRepository";

export class ExpertAreasRepository implements IExpertAreaRepository {
  async createExpertArea({
    name,
    description,
  }: CreateExpertAreaDTO): Promise<ExpertAreaEntity> {
    const expertArea = await prisma.expertArea.create({
      data: {
        name,
        description,
      },
    });

    return expertArea;
  }

  async findExpertAreaById({
    id,
  }: FindExpertAreaByIdDTO): Promise<ExpertAreaEntity | null> {
    const expertArea = await prisma.expertArea.findFirst({
      where: {
        id,
      },
    });

    return expertArea;
  }

  async findExpertAreaByName({
    name,
  }: FindExpertAreaByNameDTO): Promise<ExpertAreaEntity | null> {
    const expertArea = await prisma.expertArea.findUnique({
      where: {
        name,
      },
    });

    return expertArea;
  }

  async findAllExpertAreas(): Promise<ExpertAreaEntity[]> {
    const expertArea = await prisma.expertArea.findMany();

    return expertArea;
  }

  async updateExpertArea({
    id,
    name,
  }: UpdateExpertAreaDTO): Promise<ExpertAreaEntity> {
    const expertArea = await prisma.expertArea.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return expertArea;
  }
}
