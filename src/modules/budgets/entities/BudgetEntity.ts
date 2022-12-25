import { randomUUID } from "crypto";
import BudgetItem from "./BudgetItemEntity";

export enum CommissionStatusEnum {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}
export class BudgetEntity {
  id: string;
  commissionStatus: CommissionStatusEnum;
  companyId?: string | null;
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount: number;
  budgetItems: BudgetItem[];
  updatedAt: Date;
  createdAt: Date;

  constructor({
    shortId,
    customer,
    saller,
    discont,
    discontPercent,
    subTotal,
    total,
    itemsCount,
    commissionStatus,
    companyId,
  }: BudgetEntity) {
    this.id = randomUUID();
    this.shortId = shortId;
    this.commissionStatus = commissionStatus;
    this.companyId = companyId;
    this.customer = customer;
    this.saller = saller;
    this.discont = discont;
    this.discontPercent = discontPercent;
    this.subTotal = subTotal;
    this.total = total;
    this.itemsCount = itemsCount;
    this.budgetItems = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
