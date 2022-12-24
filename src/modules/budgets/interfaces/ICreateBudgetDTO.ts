import BudgetItemEntity from "../entities/BudgetItemEntity";

export type CreateBudgetDTO = {
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount: number;
  budgetItems: BudgetItemEntity[];
};
