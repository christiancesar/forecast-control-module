import BudgetItem from "./IBudgetItens";

export default interface IBudget {
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
}