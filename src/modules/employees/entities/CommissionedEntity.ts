import { ExpertAreaEntity } from "./ExpertAreaEntity";

export class CommissionedEntity{
  id: string;
  expertArea: ExpertAreaEntity;
  commissionPercent: number | null;
  active: boolean;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, expertArea, commissionPercent, active, createdAt, updatedAt }: CommissionedEntity) {
    this.id = id;
    this.expertArea = expertArea;
    this.commissionPercent = commissionPercent;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}