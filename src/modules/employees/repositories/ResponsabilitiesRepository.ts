import Responsability from "../entities/Responsability";
import ICreateResponsabilityDTO from "../interfaces/ICreateResponsabilityDTO";

interface IResponsabilitiesRepository {
  create(data: ICreateResponsabilityDTO): Promise<Responsability>;
  update(responsability: Responsability): Promise<Responsability>;
  findById(id: string): Promise<Responsability | undefined>;
  findAllServicesTypes(): Promise<Responsability[]>;
}


class ResponsabilitiesRepository implements IResponsabilitiesRepository {
  responsabilities: Responsability[];

  constructor() {
    this.responsabilities = [];
  }

  async create({ description }: ICreateResponsabilityDTO): Promise<Responsability> {
    const responsability = new Responsability({ description });
    this.responsabilities.push(responsability);
    return responsability
  }
  async update(responsability: Responsability): Promise<Responsability> {
    const responsabilityIndex = this.responsabilities.findIndex((Responsability: Responsability) => Responsability === Responsability)
    this.responsabilities[responsabilityIndex] = responsability;
    return this.responsabilities[responsabilityIndex]
  }
  async findById(id: string): Promise<Responsability | undefined> {
    const responsability = await this.responsabilities.find((responsability: Responsability) => responsability.id === id)
    return responsability
  }
  async findAllServicesTypes(): Promise<Responsability[]> {
    return this.responsabilities
  }
}

export default new ResponsabilitiesRepository()