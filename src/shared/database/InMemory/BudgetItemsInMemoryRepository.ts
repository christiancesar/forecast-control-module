import { CreateBudgetItemDTO } from "@modules/budgets/dtos/budgetItemsDTOs/CreateBudgetItemDTO";
import BudgetItemEntity from "@modules/budgets/entities/BudgetItemEntity";
import {
  FindBudgetItemByIdDTO,
  IBudgetsItemsRepository,
} from "@modules/budgets/repositories/Interfaces/IBudgetItemsRepository";

export class BudgetItemsInMemoryRepository implements IBudgetsItemsRepository {
  createBudgetItem(budgetItem: CreateBudgetItemDTO): Promise<BudgetItemEntity> {
    throw new Error("Method not implemented.");
  }
  updateBudgetItem(budgetItem: BudgetItemEntity): Promise<BudgetItemEntity> {
    throw new Error("Method not implemented.");
  }
  findBudgetItemById(
    budgetItem: FindBudgetItemByIdDTO
  ): Promise<BudgetItemEntity | null> {
    throw new Error("Method not implemented.");
  }
  findAllBudgetsItems(): Promise<BudgetItemEntity[]> {
    throw new Error("Method not implemented.");
  }
}
