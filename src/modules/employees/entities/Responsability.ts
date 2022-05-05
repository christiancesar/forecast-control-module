import { v4 as uuidv4 } from 'uuid'

export default class Responsability {
  id: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({ description }: Omit<Responsability, 'id' | 'createdAt' | 'updatedAt'>) {
    this.id = uuidv4();
    this.description = description;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}