import { v4 as uuidv4 } from 'uuid'

export default class BudgetItem {
  id: string;
  itemOrd: number;
  description: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  discont: number;
  subTotal: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    itemOrd,
    description,
    width,
    height,
    quantity,
    amount_unit,
    discont,
    subTotal,
    total,
  }: Omit<BudgetItem, 'id' | 'updatedAt' | 'createdAt'>) {
    this.id = uuidv4()
    this.itemOrd = itemOrd
    this.description = description
    this.width = width
    this.height = height
    this.quantity = quantity
    this.amount_unit = amount_unit
    this.discont = discont
    this.subTotal = subTotal
    this.total = total
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }
}