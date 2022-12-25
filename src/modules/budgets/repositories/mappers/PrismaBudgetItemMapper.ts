import BudgetItemEntity from "@modules/budgets/entities/BudgetItemEntity";
import { BudgetItem } from "@prisma/client";

export default new (class PrismaBudgetItemMapper {
  toDomain(budgetItem: BudgetItem): BudgetItemEntity {
    return new BudgetItemEntity({
      id: budgetItem.id,
      itemOrd: budgetItem.itemOrd,
      description: budgetItem.description,
      measure: budgetItem.measure,
      width: budgetItem.width,
      height: budgetItem.height,
      quantity: budgetItem.quantity,
      amount_unit: budgetItem.amount_unit,
      discont: budgetItem.discont,
      subTotal: budgetItem.subTotal,
      total: budgetItem.total,
      budgetId: !budgetItem.budgetId ? null : budgetItem.budgetId,
      updatedAt: budgetItem.updatedAt,
      createdAt: budgetItem.createdAt,
    });
  }

  toPrisma(budgetItem: BudgetItemEntity): BudgetItem {
    return {
      id: budgetItem.id,
      itemOrd: budgetItem.itemOrd,
      description: budgetItem.description,
      measure: budgetItem.measure,
      width: budgetItem.width,
      height: budgetItem.height,
      quantity: budgetItem.quantity,
      amount_unit: budgetItem.amount_unit,
      discont: budgetItem.discont,
      subTotal: budgetItem.subTotal,
      total: budgetItem.total,
      budgetId: !budgetItem.budgetId ? null : budgetItem.budgetId,
      updatedAt: budgetItem.updatedAt,
      createdAt: budgetItem.createdAt,
    };
  }
})();
