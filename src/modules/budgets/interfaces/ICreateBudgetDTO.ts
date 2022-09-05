import BudgetItem from "./ICreateBudgetItemDTO";

export default interface ICreateBudgetDTO {
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount?: number | null;
  budgetItems: BudgetItem[];
}