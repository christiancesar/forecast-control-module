import { CommissionedEntity } from "../../entities/CommissionedEntity";
import { CreateCommissionedDTO, ICommissionedRepository, SoftDeleteCommissionedDTO, UpdateCommissionedDTO } from "../interfaces/ICommissionedRepository";

export class CommissionedRepository implements ICommissionedRepository {
  createCommissioned(commissioned: CreateCommissionedDTO): Promise<CommissionedEntity> {
    throw new Error("Method not implemented.");
  }
  updateCommissioned(commissioned: UpdateCommissionedDTO): Promise<CommissionedEntity> {
    throw new Error("Method not implemented.");
  }
  softDeleteCommissioned(commissioned: SoftDeleteCommissionedDTO): Promise<CommissionedEntity> {
    throw new Error("Method not implemented.");
  }

}