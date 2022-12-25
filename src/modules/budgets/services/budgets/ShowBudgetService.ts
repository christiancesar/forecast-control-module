import { BudgetEntity } from "@modules/budgets/entities/BudgetEntity";
import { IBudgetsRepository } from "@modules/budgets/repositories/Interfaces/IBudgetsRespository";

type ShowBudgetParams = {
  budgetId: string;
};

export default class ShowBudgetService {
  constructor(private budgetRepository: IBudgetsRepository) {}

  async execute({ budgetId }: ShowBudgetParams): Promise<BudgetEntity> {
    const budgetExist = await this.budgetRepository.findBudgetById({
      id: budgetId,
    });

    if (!budgetExist) {
      throw new Error("Budget not found");
    }

    return budgetExist;
  }
}
