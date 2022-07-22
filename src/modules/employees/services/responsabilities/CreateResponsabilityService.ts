import Responsability from "../../entities/Responsability";
import ICreateResponsabilityDTO from "../../interfaces/ICreateResponsabilityDTO";
import ResponsabilitiesRepository from "../../repositories/ResponsabilitiesRepository";

export default class CreateResponsabilityService {

  async execute({ description }: ICreateResponsabilityDTO): Promise<Responsability> {
    const responsability = await ResponsabilitiesRepository.create({ description });
    return responsability
  }
}