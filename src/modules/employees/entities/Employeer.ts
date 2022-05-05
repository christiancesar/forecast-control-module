import { v4 as uuidv4 } from 'uuid'
import Responsability from './Responsability';
import ServiceType from './ServiceType';

export default class Employeer {
  id: string;
  name: string;
  salary: number;
  responsability: Responsability;
  commissionedBy: ServiceType;
  createdAt: Date;
  updatedAt: Date;

  constructor(name: string, salary: number, responsability: Responsability, commissionedBy: ServiceType) {
    this.id = uuidv4();
    this.name = name;
    this.salary = salary;
    this.responsability = responsability;
    this.commissionedBy = commissionedBy;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}

