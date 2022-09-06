export default class Stage {
  id?: string;
  description: string;
  updatedAt?: Date;
  createdAt?: Date;
  constructor({ id, description, createdAt, updatedAt }: Stage) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}