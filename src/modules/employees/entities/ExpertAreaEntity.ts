export class ExpertAreaEntity {
  id: string;
  description: string; //Corte,Montagem, Instalação
  updatedAt: Date;
  createdAt: Date;

  constructor({ id, description, createdAt, updatedAt }: ExpertAreaEntity) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}