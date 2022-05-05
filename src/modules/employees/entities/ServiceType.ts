import { v4 as uuidv4 } from 'uuid'

export default class ServiceType {
  id: string;
  description: string; //Corte,Montagem, Instalação
  commissionPercent: number;
  createdAt: Date;
  updatedAt: Date;

  constructor({ description, commissionPercent }: Omit<ServiceType, 'id' | 'createdAt' | 'updatedAt'>) {
    this.id = uuidv4();
    this.description = description;
    this.commissionPercent = commissionPercent;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}