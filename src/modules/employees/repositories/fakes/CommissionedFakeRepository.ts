import { randomUUID } from "crypto";
import { CommissionedEntity } from "../../entities/CommissionedEntity";
import { CreateCommissionedDTO, ICommissionedRepository, SoftDeleteCommissionedDTO, UpdateCommissionedDTO } from "../interfaces/ICommissionedRepository";



export default new class CommissionedFakeRepository implements ICommissionedRepository {
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