import ServiceType from "../../entities/ServiceType";
import ServicesTypesRepository from "../../repositories/ServicesTypesRepository";

export default class ListServiceTypeService {

  async execute(): Promise<ServiceType[]> {
    return ServicesTypesRepository.findAllServicesTypes()
  }
}