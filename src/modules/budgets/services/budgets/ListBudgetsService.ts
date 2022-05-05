import Budget from "../../entities/Budget";
import BudgetsRepository from "../../repositories/BudgetsRepository"

export default class ListBudgetsService {

  async execute(): Promise<Budget[]> {
    const budgets = await BudgetsRepository.findAllBudgets();
    return budgets;
  }
}