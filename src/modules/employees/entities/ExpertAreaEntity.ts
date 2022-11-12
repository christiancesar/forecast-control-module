export class ExpertAreaEntity {
  id: string;
  name: string; 
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, name, createdAt, updatedAt }: ExpertAreaEntity) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}