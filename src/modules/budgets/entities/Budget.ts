import { v4 as uuidv4 } from 'uuid'
import BudgetItem from './BudgetItem';

export default class Budget {
  id: string;
  shortId: number;
  customer: string;
  saller: string;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itensCount: number;
  budgetItens: BudgetItem[];
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
    itensCount,    
  }: Omit<Budget, 'id' | 'updatedAt' | 'createdAt' | 'budgetItens'>) {
    this.id = uuidv4();
    this.shortId = shortId;
    this.customer = customer;
    this.saller = saller;
    this.discont = discont;
    this.discontPercent = discontPercent;
    this.subTotal = subTotal;
    this.total = total;
    this.itensCount = itensCount;
    this.budgetItens = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}