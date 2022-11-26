  export class RefreshTokenEntity {
  id: string;
  userId: string;
  token: string;
  isValid: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    userId,
    token,
    isValid,
    createdAt,
    updatedAt
  }: RefreshTokenEntity) {
    this.id = id;
    this.userId = userId;
    this.token = token;
    this.isValid = isValid;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
