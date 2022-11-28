import { CommissionedEntity } from "../entities/CommissionedEntity";
import { ICommissionedRepository } from "../repositories/interfaces/ICommissionedRepository";

type UpdateEmployeeCommissionedParams = {
  id: string;
  commissionPercent: number;
  active: boolean;
};

export class UpdateEmployeeCommissionedService {
  constructor(private commissionedRepository: ICommissionedRepository) {}

  async execute({
    id,
    commissionPercent,
    active,
  }: UpdateEmployeeCommissionedParams): Promise<CommissionedEntity> {
    const commissioned = await this.commissionedRepository.updateCommissioned({
      id,
      commissionPercent,
      active,
    });

    return commissioned;
  }
}
