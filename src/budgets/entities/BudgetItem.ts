import { v4 as uuidv4 } from 'uuid'

export default class BudgetItem {
  private uuid: string;
  private itemOrd: number;
  private description: string;
  private width: number;
  private heigth: number;
  private quantity: number;
  private amount_unit: number;
  private discont: number;
  private total: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    itemOrd: number,
    description: string,
    width: number,
    heigth: number,
    quantity: number,
    amount_unit: number,
    discont: number,
    total: number,
  ) {
    this.uuid = uuidv4()
    this.itemOrd = itemOrd
    this.description = description
    this.width = width
    this.heigth = heigth
    this.quantity = quantity
    this.amount_unit = amount_unit
    this.discont = discont
    this.total = total
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }
}