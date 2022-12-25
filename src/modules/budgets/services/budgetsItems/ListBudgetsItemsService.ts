import { IBudgetsItemsRepository } from "@modules/budgets/repositories/Interfaces/IBudgetItemsRepository";
import BudgetItem from "../../entities/BudgetItemEntity";

export default class ListBudgetsItemsService {
  constructor(private budgetItemsRepository: IBudgetsItemsRepository) {}

  async execute(): Promise<BudgetItem[]> {
    const budgetsItems = await this.budgetItemsRepository.findAllBudgetsItems();

    return budgetsItems;
  }
}
