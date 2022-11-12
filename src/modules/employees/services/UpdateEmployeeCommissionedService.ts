import { CommissionedEntity } from "../entities/CommissionedEntity";
import CommissionedRepository from "../repositories/CommissionedRepository";

type UpdateEmployeeCommissionedParams = {
  id: string;
  commissionPercent: number;
  active: boolean;
};

export class UpdateEmployeeCommissionedService {
  async execute({
    id,
    commissionPercent,
    active,
  }: UpdateEmployeeCommissionedParams): Promise<CommissionedEntity> {
    const commissioned = await CommissionedRepository.updateCommissioned({
      id,
      commissionPercent,
      active,
      
    });

    return commissioned;
  }
}