import BudgetItem from "../entities/BudgetItem";
import ICreateBudgetItemDTO from "../interfaces/ICreateBudgetItemDTO";

interface IBudgetsItensRepository {
  create(data: ICreateBudgetItemDTO): Promise<BudgetItem>;
  update(budgetItem: BudgetItem): Promise<BudgetItem>;
  findById(id: string): Promise<BudgetItem | undefined>;
  findAllBudgets(): Promise<BudgetItem[]>;
}


class BudgetsRepository implements IBudgetsItensRepository {
  budgetsItens: BudgetItem[];

  constructor() {
    this.budgetsItens = [];
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
    this.budgetsItens.push(budgetItem);
    return budgetItem
  }

  async update(budgetItem: BudgetItem): Promise<BudgetItem> {
    const budgetItemIndex = this.budgetsItens.findIndex((budgetItem: BudgetItem) => budgetItem === budgetItem)
    this.budgetsItens[budgetItemIndex] = budgetItem;
    return this.budgetsItens[budgetItemIndex]
  }

  async findById(id: string): Promise<BudgetItem | undefined> {
    const budgetItenm = await this.budgetsItens.find((Budget) => Budget.id === id)
    return budgetItenm
  }

  async findAllBudgets(): Promise<BudgetItem[]> {
    return this.budgetsItens
  }
}

export default new BudgetsRepository()