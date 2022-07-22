import { v4 as uuidv4 } from 'uuid';

export default class Employee {
  id: string;
  name: string;
  salary?: number;
  responsabilityId?: string;
  commissionedBy?: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor({ name, salary, responsabilityId, commissionedBy }: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>) {
    this.id = uuidv4();
    this.name = name;
    this.salary = salary;
    this.responsabilityId = responsabilityId;
    this.commissionedBy = commissionedBy;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

}

