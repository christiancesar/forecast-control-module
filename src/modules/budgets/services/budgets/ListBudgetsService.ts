import Budget from "../../entities/Budget";
import BudgetsRepository from "../../repositories/BudgetsRepository"

export default class ListBudgetsService { 
  private budgetRepository: BudgetsRepository;

  constructor() {
    this.budgetRepository = new BudgetsRepository();
  }
  async execute(): Promise<Budget[]> {
    const budgets = await this.budgetRepository.findAllBudgets();
    return budgets;
  }
}