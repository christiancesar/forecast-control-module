export type UpdateBudgetDTO = {
  id: string;
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount: number;
  updatedAt: Date;
  createdAt: Date;
};
