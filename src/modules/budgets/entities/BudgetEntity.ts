import { randomUUID } from 'crypto';
import BudgetItem from './BudgetItemEntity';

export default class BudgetEntity {
  id: string;
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
  }: BudgetEntity) {
    this.id = randomUUID();
    this.shortId = shortId;
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