import BudgetItem from "../../entities/BudgetItem";
import BudgetsItemsRepository from "../../repositories/BudgetsItemsRepository";

interface IRequest {
  budgetItemId: string;
}

export default class ShowBudgetItemService {
  async execute({ budgetItemId }: IRequest): Promise<BudgetItem | undefined> {
    const budgetItem = await BudgetsItemsRepository.findById(budgetItemId)
    return budgetItem;
  }
}