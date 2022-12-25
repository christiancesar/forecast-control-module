import { IBudgetsItemsRepository } from "@modules/budgets/repositories/Interfaces/IBudgetItemsRepository";
import BudgetItemEntity from "../../entities/BudgetItemEntity";

type ShowBudgetItemParams = {
  budgetItemId: string;
};

export default class ShowBudgetItemService {
  constructor(private budgetItemsRepository: IBudgetsItemsRepository) {}

  async execute({
    budgetItemId,
  }: ShowBudgetItemParams): Promise<BudgetItemEntity> {
    const budgetItem = await this.budgetItemsRepository.findBudgetItemById({
      id: budgetItemId,
    });

    if (!budgetItem) {
      throw new Error("Budget Item not found");
    }

    return budgetItem;
  }
}
