export default interface ICreateBudgetItemDTO {
  itemOrd: number;
  description: string;
  measure: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  subTotal: number;
  discont: number;
  total: number
}