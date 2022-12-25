import { CreateBudgetDTO } from "@modules/budgets/dtos/budgetsDTOs/CreateBudgetDTO";
import { FindBudgetByIdDTO } from "@modules/budgets/dtos/budgetsDTOs/FindBudgetByIdDTO";
import { BudgetEntity } from "@modules/budgets/entities/BudgetEntity";
import { IBudgetsRepository } from "@modules/budgets/repositories/Interfaces/IBudgetsRespository";

export class BudgetsInMemoryRepository implements IBudgetsRepository {
  create({
    shortId,
    customer,
    saller,
    discont,
    discontPercent,
    subTotal,
    total,
    itemsCount,
    budgetItems,
  }: CreateBudgetDTO): Promise<BudgetEntity> {
    throw new Error("Method not implemented.");
  }
  update(budget: BudgetEntity): Promise<BudgetEntity> {
    throw new Error("Method not implemented.");
  }
  findBudgetById(budget: FindBudgetByIdDTO): Promise<BudgetEntity | null> {
    throw new Error("Method not implemented.");
  }
  findAllBudgets(): Promise<BudgetEntity[]> {
    throw new Error("Method not implemented.");
  }
}
