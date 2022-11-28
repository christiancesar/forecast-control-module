import { prisma } from "@shared/database/prisma";
import { CommissionedEntity } from "../../entities/CommissionedEntity";
import {
  CreateCommissionedDTO,
  FindCommissionedByIdDTO,
  ICommissionedRepository,
  ShowCommissionedByEmployeeDTO,
  UpdateCommissionedDTO,
} from "../interfaces/ICommissionedRepository";

export class CommissionedRepository implements ICommissionedRepository {
  async createCommissioned({
    commissionPercent,
    expertAreaId,
    employeeId,
  }: CreateCommissionedDTO): Promise<CommissionedEntity> {
    const commissioned = await prisma.commissioned.create({
      data: {
        commissionPercent,
        employeeId,
        expertAreaId,
      },
      include: {
        expertArea: true,
      },
    });

    return {
      id: commissioned.id,
      expertArea: commissioned.expertArea,
      commissionPercent: commissioned.commissionPercent,
      active: commissioned.active,
      createdAt: commissioned.createdAt,
      updatedAt: commissioned.updatedAt,
    };
  }

  async findCommissionedById({
    id,
  }: FindCommissionedByIdDTO): Promise<CommissionedEntity | null> {
    const commissioned = await prisma.commissioned.findFirst({
      where: {
        id,
      },
      include: {
        expertArea: true,
      },
    });

    if (commissioned) {
      return {
        id: commissioned.id,
        expertArea: commissioned.expertArea,
        commissionPercent: commissioned.commissionPercent,
        active: commissioned.active,
        createdAt: commissioned.createdAt,
        updatedAt: commissioned.updatedAt,
      };
    }

    return null;
  }

  async updateCommissioned({
    id,
    active,
    commissionPercent,
  }: UpdateCommissionedDTO): Promise<CommissionedEntity> {
    const commissioned = await prisma.commissioned.update({
      where: {
        id,
      },
      data: {
        active,
        commissionPercent,
      },
      include: {
        expertArea: true,
      },
    });

    return commissioned;
  }

  async showCommissionedByEmployee({
    employeeId,
  }: ShowCommissionedByEmployeeDTO): Promise<CommissionedEntity[]> {
    const commissioned = await prisma.commissioned.findMany({
      where: {
        employeeId,
      },
      include: {
        expertArea: true,
      },
    });

    const commissionedArray = commissioned.map((com) => {
      return {
        id: com.id,
        expertArea: com.expertArea,
        commissionPercent: com.commissionPercent,
        active: com.active,
        createdAt: com.createdAt,
        updatedAt: com.updatedAt,
      };
    });

    return commissionedArray;
  }
}
