import BudgetItem from './BudgetItem';

export default class Budget {
  id: string;
  shortId?: number;
  customer: string;
  saller?: string;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount?: number;
  budgetItems?: BudgetItem[];
  createdAt: Date;
  updatedAt: Date;

  constructor({
    shortId,
    customer,
    saller,
    discont,
    discontPercent,
    subTotal,
    total,
    itemsCount,    
  }: Omit<Budget, 'id' | 'updatedAt' | 'createdAt' | 'budgetItems'>) {
    this.id = '';
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