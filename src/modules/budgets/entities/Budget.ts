import BudgetItem from './BudgetItem';

export default class Budget {
  id!: string;
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount?: number | null;
  budgetItems?: BudgetItem[];
  updatedAt!: Date;
  createdAt!: Date;

  constructor({
    shortId,
    customer,
    saller,
    discont,
    discontPercent,
    subTotal,
    total,
    itemsCount,    
  }: Omit<Budget, "id" | "updatedAt" | "createdAt">) {
    this.shortId = shortId;
    this.customer = customer;
    this.saller = saller;
    this.discont = discont;
    this.discontPercent = discontPercent;
    this.subTotal = subTotal;
    this.total = total;
    this.itemsCount = itemsCount;
    this.budgetItems = [];
  }
}