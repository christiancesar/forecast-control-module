export default interface BudgetItem {
  ordenation: number;
  description: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  subTotal?: number;
  discont?: number;
  total?: number
}