import Budget from "../entities/Budget";
import ICreateBudgetDTO from "../interfaces/ICreateBudgetDTO";

interface IBudgetsRepository {
  create(data: ICreateBudgetDTO): Promise<Budget>;
  update(budget: Budget): Promise<Budget>;
  findById(id: string): Promise<Budget | undefined>;
  findAllBudgets(): Promise<Budget[]>;
}


class BudgetsRepository implements IBudgetsRepository {
  budgets: Budget[];

  constructor() {
    this.budgets = [];
  }

  async create({
    shortId,
    customer,
    saller,
    discont,
    discontPercent,
    subTotal,
    total,
    itensCount,
  }: ICreateBudgetDTO): Promise<Budget> {
    const budget = new Budget({
      shortId,
      customer,
      saller,
      discont,
      discontPercent,
      subTotal,
      total,
      itensCount,
    });
    this.budgets.push(budget);
    return budget
  }
  async update(budget: Budget): Promise<Budget> {
    const budgetIndex = this.budgets.findIndex((budget: Budget) => budget === budget)
    this.budgets[budgetIndex] = budget;
    return this.budgets[budgetIndex]
  }
  async findById(id: string): Promise<Budget | undefined> {
    const budget = await this.budgets.find((budget) => budget.id === id)
    return budget
  }
  async findAllBudgets(): Promise<Budget[]> {
    return this.budgets
  }
}

export default new BudgetsRepository()