import { CreateBudgetItemDTO } from "@modules/budgets/dtos/budgetItemsDTOs/CreateBudgetItemDTO";
import BudgetItemEntity from "@modules/budgets/entities/BudgetItemEntity";

export type FindBudgetItemByIdDTO = {
  id: string;
};

export interface IBudgetsItemsRepository {
  createBudgetItem(budgetItem: CreateBudgetItemDTO): Promise<BudgetItemEntity>;
  updateBudgetItem(budgetItem: BudgetItemEntity): Promise<BudgetItemEntity>;
  findBudgetItemById(
    budgetItem: FindBudgetItemByIdDTO
  ): Promise<BudgetItemEntity | null>;
  findAllBudgetsItems(): Promise<BudgetItemEntity[]>;
}
