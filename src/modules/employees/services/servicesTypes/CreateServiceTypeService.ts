import ServiceType from "../../entities/ServiceType";
import ICreateServiceTypeDTO from "../../interfaces/ICreateServiceTypeDTO";
import ServicesTypesRepository from "../../repositories/ServicesTypesRepository";

export default class CreateServiceType {

  async execute({ description, commissionPercent }: ICreateServiceTypeDTO): Promise<ServiceType> {
    const serviceType = await ServicesTypesRepository.create({ description, commissionPercent });
    return serviceType
  }
}