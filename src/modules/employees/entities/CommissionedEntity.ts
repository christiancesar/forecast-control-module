import { ExpertAreaEntity } from "./ExpertAreaEntity";

export class CommissionedEntity{
  id: string;
  expertArea: ExpertAreaEntity;
  commissionPercent: number;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, expertArea, commissionPercent, createdAt, updatedAt }: CommissionedEntity) {
    this.id = id;
    this.expertArea = expertArea;
    this.commissionPercent = commissionPercent;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}