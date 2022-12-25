import { BudgetEntity } from "@modules/budgets/entities/BudgetEntity";
import { IBudgetsRepository } from "@modules/budgets/repositories/Interfaces/IBudgetsRespository";

export default class ListBudgetsService {
  constructor(private budgetRepository: IBudgetsRepository) {}

  async execute(): Promise<BudgetEntity[]> {
    const budgets = await this.budgetRepository.findAllBudgets();
    return budgets;
  }
}
