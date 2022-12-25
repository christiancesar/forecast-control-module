import { CreateBudgetDTO } from "@modules/budgets/dtos/budgetsDTOs/CreateBudgetDTO";
import { FindBudgetByIdDTO } from "@modules/budgets/dtos/budgetsDTOs/FindBudgetByIdDTO";
import { UpdateBudgetDTO } from "@modules/budgets/dtos/budgetsDTOs/UpdateBudgetDTO";
import { BudgetEntity } from "@modules/budgets/entities/BudgetEntity";

export interface IBudgetsRepository {
  create(data: CreateBudgetDTO): Promise<BudgetEntity>;
  update(budget: UpdateBudgetDTO): Promise<BudgetEntity>;
  findBudgetById(budget: FindBudgetByIdDTO): Promise<BudgetEntity | null>;
  findAllBudgets(): Promise<BudgetEntity[]>;
}
