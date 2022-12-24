import Budget from "../../entities/BudgetEntity";
import BudgetsRepository from "../../repositories/BudgetsRepository";

interface IRequest {
  budgetId: string;
}

export default class ShowBudgetService {
  async execute({ budgetId }: IRequest): Promise<Budget | undefined> {
    const budget = await BudgetsRepository.findById(budgetId);
    return budget;
  }
}
