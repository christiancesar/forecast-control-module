export class CommissionedEntity{
  id: string;
  expertAreaId: string;
  commissionPercent: number;
  active: boolean;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, expertAreaId, commissionPercent, active, createdAt, updatedAt }: CommissionedEntity) {
    this.id = id;
    this.expertAreaId = expertAreaId;
    this.commissionPercent = commissionPercent;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}