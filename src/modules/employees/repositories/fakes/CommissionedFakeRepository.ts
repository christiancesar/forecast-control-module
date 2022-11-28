import { randomUUID } from "crypto";
import { CommissionedEntity } from "../../entities/CommissionedEntity";
import {
  CreateCommissionedDTO,
  FindCommissionedByIdDTO,
  ICommissionedRepository,
  ShowCommissionedByEmployeeDTO,
  UpdateCommissionedDTO,
} from "../interfaces/ICommissionedRepository";
import ExpertAreasFakeRepository from "./ExpertAreasFakeRepository";

export default new (class CommissionedFakeRepository
  implements ICommissionedRepository
{
  commissionedArray: CommissionedEntity[] = [];

  constructor() {
    this.commissionedArray = [];
  }

  async findCommissionedById({
    id,
  }: FindCommissionedByIdDTO): Promise<CommissionedEntity | null> {
    const commissioned = this.commissionedArray.find((commissioned) => {
      return commissioned.id === id;
    }) as CommissionedEntity | null;

    return commissioned;
  }

  async showCommissionedByEmployee({
    employeeId,
  }: ShowCommissionedByEmployeeDTO): Promise<CommissionedEntity[]> {
    return this.commissionedArray;
  }

  async createCommissioned({
    commissionPercent,
    expertAreaId,
  }: CreateCommissionedDTO): Promise<CommissionedEntity> {
    const expertAreaExist = await ExpertAreasFakeRepository.findExpertAreaById({
      id: expertAreaId,
    });

    const commissioned = new CommissionedEntity({
      id: randomUUID(),
      commissionPercent,
      expertArea: expertAreaExist!,
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
      expertArea: this.commissionedArray[commissionedIndex].expertArea,
      createdAt: this.commissionedArray[commissionedIndex].createdAt,
      updatedAt: new Date(),
    });

    this.commissionedArray[commissionedIndex] = commissioned;

    return commissioned;
  }
})();
