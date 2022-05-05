import BudgetItem from "../entities/BudgetItem";
import ICreateBudgetItemDTO from "../interfaces/ICreateBudgetItemDTO";

interface IBudgetsItemsRepository {
  create(data: ICreateBudgetItemDTO): Promise<BudgetItem>;
  update(budgetItem: BudgetItem): Promise<BudgetItem>;
  findById(budgetItemId: string): Promise<BudgetItem | undefined>;
  findAllBudgetsItems(): Promise<BudgetItem[]>;
}


class BudgetsRepository implements IBudgetsItemsRepository {
  budgetsItems: BudgetItem[];

  constructor() {
    this.budgetsItems = [];
  }

  async create({
    itemOrd,
    description,
    width,
    height,
    quantity,
    amount_unit,
    subTotal,
    discont,
    total,
  }: ICreateBudgetItemDTO): Promise<BudgetItem> {
    const budgetItem = new BudgetItem({
      itemOrd,
      description,
      width,
      height,
      quantity,
      amount_unit,
      subTotal,
      discont,
      total,

    });
    this.budgetsItems.push(budgetItem);
    return budgetItem
  }

  async update(budgetItem: BudgetItem): Promise<BudgetItem> {
    const budgetItemIndex = this.budgetsItems.findIndex((budgetItem: BudgetItem) => budgetItem === budgetItem)
    this.budgetsItems[budgetItemIndex] = budgetItem;
    return this.budgetsItems[budgetItemIndex]
  }

  async findById(budgetItemId: string): Promise<BudgetItem | undefined> {
    const budgetItenm = await this.budgetsItems.find((budgetItem: BudgetItem) => budgetItem.id === budgetItemId)
    return budgetItenm
  }

  async findAllBudgetsItems(): Promise<BudgetItem[]> {
    return this.budgetsItems
  }
}

export default new BudgetsRepository()