import { CompanyEntity } from "../../companies/entities/Company";
import { PeopleEntity } from "../../peoples/entities/PeopleEntity";

class Permission {
  id: string;
  name: string;
  isMaterAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    isMaterAdmin,
    createdAt,
    updatedAt
  }: Permission) {
    this.id = id;
    this.name = name;
    this.isMaterAdmin = isMaterAdmin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  confirmedEmail: boolean;
  company?: CompanyEntity[];
  permissions: Permission[];
  userData?: PeopleEntity;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    email,
    password,
    confirmedEmail,
    avatar,
    company,
    permissions,
    userData,
    createdAt,
    updatedAt
  }: UserEntity)  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmedEmail = confirmedEmail;
    this.avatar = avatar;
    this.company = company;
    this.permissions = permissions;
    this.userData = userData;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}