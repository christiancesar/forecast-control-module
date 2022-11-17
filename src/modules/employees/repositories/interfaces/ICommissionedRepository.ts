import { CommissionedEntity } from "../../entities/CommissionedEntity";

export type CreateCommissionedDTO = {
  expertAreaId: string;
  commissionPercent: number;
};

export type UpdateCommissionedDTO = {
  id: string;
  commissionPercent: number;
  active: boolean;
};

export type SoftDeleteCommissionedDTO = {
  id: string;
}

export interface ICommissionedRepository {
  createCommissioned(commissioned: CreateCommissionedDTO): Promise<CommissionedEntity>;
  updateCommissioned(commissioned: UpdateCommissionedDTO): Promise<CommissionedEntity>;
  softDeleteCommissioned(commissioned: SoftDeleteCommissionedDTO): Promise<CommissionedEntity>;
};