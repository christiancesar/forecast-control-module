import BudgetItem from "../../entities/BudgetItem";
import BudgetsItemsRepository from "../../repositories/BudgetsItemsRepository";

export default class ListBudgetsItemsService {
  async execute(): Promise<BudgetItem[]> {
    const budgetsItems = await BudgetsItemsRepository.findAllBudgetsItems();

    return budgetsItems;
  }
}