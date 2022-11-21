export class ExpertAreaEntity {
  id: string;
  name: string; 
  description: string | null;
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, name, description, createdAt, updatedAt }: ExpertAreaEntity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}