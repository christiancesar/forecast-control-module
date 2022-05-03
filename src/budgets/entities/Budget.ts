import { v4 as uuidv4 } from 'uuid'
import BudgetItem from './BudgetItem';

export default class Budget {
  private uuid: string;
  private shortId: number;
  private customer: string;
  private saller: string;
  private discont: number;
  private discontPercent: number;
  private subTotal: number;
  private total: number;
  private itensCount: number;
  private budgetItens: BudgetItem[];
  private createdAt: Date;
  private updatedAt: Date;

  constructor(shortId: number,
    customer: string,
    saller: string,
    discont: number,
    discontPercent: number,
    subTotal: number,
    total: number,
    itensCount: number,
    budgetItens: BudgetItem[]
  ) {
    this.uuid = uuidv4();
    this.shortId = shortId;
    this.customer = customer;
    this.saller = saller;
    this.discont = discont;
    this.discontPercent = discontPercent;
    this.subTotal = subTotal;
    this.total = total;
    this.itensCount = itensCount;
    this.budgetItens = budgetItens;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}