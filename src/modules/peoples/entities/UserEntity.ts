export class UserEntity {
  id: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({ id, email, password, avatar }: UserEntity) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}