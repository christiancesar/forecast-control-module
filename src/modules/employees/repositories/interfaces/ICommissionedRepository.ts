import { CommissionedEntity } from "../../entities/CommissionedEntity";

export type CreateCommissionedDTO = {
  expertAreaId: string;
  commissionPercent: number;
  employeeId: string;
};

export type UpdateCommissionedDTO = {
  id: string;
  commissionPercent: number;
  active: boolean;
};

export type SoftDeleteCommissionedDTO = {
  id: string;
};

export type FindCommissionedByIdDTO = {
  id: string;
};

export type ShowCommissionedByEmployeeDTO = {
  employeeId: string;
};

export interface ICommissionedRepository {
  createCommissioned(
    commissioned: CreateCommissionedDTO
  ): Promise<CommissionedEntity>;
  findCommissionedById(
    commissioned: FindCommissionedByIdDTO
  ): Promise<CommissionedEntity | null>;
  updateCommissioned(
    commissioned: UpdateCommissionedDTO
  ): Promise<CommissionedEntity>;
  showCommissionedByEmployee(
    commissioned: ShowCommissionedByEmployeeDTO
  ): Promise<CommissionedEntity[]>;
}
