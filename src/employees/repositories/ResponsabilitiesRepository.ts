import Responsability from "../entities/Responsability";
import ICreateResponsabilityDTO from "../interfaces/ICreateResponsabilityDTO";

interface IResponsabilitiesRepository {
  create(data: ICreateResponsabilityDTO): Promise<Responsability>;
  update(Responsability: Responsability): Promise<Responsability>;
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
  async update(Responsability: Responsability): Promise<Responsability> {
    const ResponsabilityIndex = this.responsabilities.findIndex((Responsability: Responsability) => Responsability === Responsability)
    this.responsabilities[ResponsabilityIndex] = Responsability;
    return this.responsabilities[ResponsabilityIndex]
  }
  async findById(id: string): Promise<Responsability | undefined> {
    const Responsability = await this.responsabilities.find((Responsability) => Responsability.id === id)
    return Responsability
  }
  async findAllServicesTypes(): Promise<Responsability[]> {
    return this.responsabilities
  }
}

export default new ResponsabilitiesRepository()