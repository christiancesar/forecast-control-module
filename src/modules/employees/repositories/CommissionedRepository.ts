import { randomUUID } from "crypto";
import { CommissionedEntity } from "../entities/CommissionedEntity";

type CreateCommissionedDTO = {
  expertAreaId: string;
  commissionPercent: number;
};

type UpdateCommissionedDTO = {
  id: string;
  commissionPercent: number;
  active: boolean;
};

type SoftDeleteCommissionedDTO = {
  id: string;
}

interface ICommissionedRepository {
  createCommissioned(commissioned: CreateCommissionedDTO): Promise<CommissionedEntity>;
  updateCommissioned(commissioned: UpdateCommissionedDTO): Promise<CommissionedEntity>;
  softDeleteCommissioned(commissioned: SoftDeleteCommissionedDTO): Promise<CommissionedEntity>;
};

export default new class CommissionedRepository implements ICommissionedRepository {
  commissionedArray: CommissionedEntity[] = [];

  constructor() {
    this.commissionedArray = [];
  }

  async createCommissioned({
    commissionPercent,
    expertAreaId,
  }: CreateCommissionedDTO): Promise<CommissionedEntity> {
    const commissioned = new CommissionedEntity({
      id: randomUUID(),
      commissionPercent,
      expertAreaId,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.commissionedArray.push(commissioned);

    return commissioned;
  }

  async updateCommissioned({
    id,
    active,
    commissionPercent,
  }: UpdateCommissionedDTO): Promise<CommissionedEntity> {
    const commissionedIndex = await this.commissionedArray.findIndex(
      (commissioned) => commissioned.id === id
    );

    const commissioned = new CommissionedEntity({
      id,
      commissionPercent,
      active,
      expertAreaId: this.commissionedArray[commissionedIndex].expertAreaId,
      createdAt: this.commissionedArray[commissionedIndex].createdAt,
      updatedAt: new Date(),
    });

    this.commissionedArray[commissionedIndex] = commissioned;

    return commissioned;
  }

  async softDeleteCommissioned({ id }: SoftDeleteCommissionedDTO): Promise<CommissionedEntity> {
    const commissionedIndex = await this.commissionedArray.findIndex(
      (commissioned) => commissioned.id === id
    );

    this.commissionedArray[commissionedIndex].active = false;
    this.commissionedArray[commissionedIndex].updatedAt = new Date();

    return this.commissionedArray[commissionedIndex];
  }
}