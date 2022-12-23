import { randomUUID } from "crypto";

export default class BudgetItemEntity {
  id: string;
  itemOrd: number;
  description: string;
  measure: string;
  width: number;
  height: number;
  quantity: number;
  amount_unit: number;
  discont: number;
  subTotal: number;
  total: number;
  updatedAt: Date;
  createdAt: Date;

  constructor({
    itemOrd,
    description,
    measure,
    width,
    height,
    quantity,
    amount_unit,
    discont,
    subTotal,
    total,
  }: BudgetItemEntity) {
    this.id = randomUUID();
    this.itemOrd = itemOrd;
    this.description = description;
    this.measure = measure;
    this.width = width;
    this.height = height;
    this.quantity = quantity;
    this.amount_unit = amount_unit;
    this.discont = discont;
    this.subTotal = subTotal;
    this.total = total;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
