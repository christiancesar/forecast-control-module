import Responsability from "../../entities/Responsability";
import ResponsabilitiesRepository from "../../repositories/ResponsabilitiesRepository";

export default class ListResponsabilityService {

  async execute(): Promise<Responsability[]> {
    return ResponsabilitiesRepository.findAllServicesTypes()
  }
}