class UserTokenEntity {
  id: string;
  token: string;
  userId: string;
  expiresIn: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    token,
    userId,
    expiresIn,
    createdAt,
    updatedAt
  }: UserTokenEntity) {
    this.id = id;
    this.token = token;
    this.userId = userId;
    this.expiresIn = expiresIn;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}