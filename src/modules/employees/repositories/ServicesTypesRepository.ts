import ServiceType from "../entities/ServiceType";
import ICreateServiceTypeDTO from "../interfaces/ICreateServiceTypeDTO";

interface IServiceTypeRepository {
  create(data: ICreateServiceTypeDTO): Promise<ServiceType>;
  update(serviceType: ServiceType): Promise<ServiceType>;
  findById(id: string): Promise<ServiceType | undefined>;
  findAllServicesTypes(): Promise<ServiceType[]>;
}

class ServicesTypesRepository implements IServiceTypeRepository {
  servicesTypes: ServiceType[];

  constructor() {
    this.servicesTypes = [];
  }

  async create({ description, commissionPercent }: ICreateServiceTypeDTO): Promise<ServiceType> {
    const serviceType = new ServiceType({ description, commissionPercent });
    this.servicesTypes.push(serviceType);
    return serviceType
  }
  async update(serviceType: ServiceType): Promise<ServiceType> {
    const serviceTypeIndex = this.servicesTypes.findIndex((serviceType: ServiceType) => serviceType === serviceType)
    this.servicesTypes[serviceTypeIndex] = serviceType;
    return this.servicesTypes[serviceTypeIndex]
  }
  async findById(id: string): Promise<ServiceType | undefined> {
    const serviceType = await this.servicesTypes.find((serviceType) => serviceType.id === id)
    return serviceType
  }
  async findAllServicesTypes(): Promise<ServiceType[]> {
    return this.servicesTypes
  }
}

export default new ServicesTypesRepository();