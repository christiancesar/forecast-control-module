import {
  BudgetEntity,
  CommissionStatusEnum,
} from "@modules/budgets/entities/BudgetEntity";
import BudgetItemEntity from "@modules/budgets/entities/BudgetItemEntity";
import { Budget, BudgetItem } from "@prisma/client";

type PrismaBudget = Budget & {
  budgetItems: BudgetItem[];
};

const commissionStatusFx = (status: string): CommissionStatusEnum => {
  return status === "OPEN"
    ? CommissionStatusEnum.OPEN
    : CommissionStatusEnum.CLOSED;
};

export default new (class PrismaBudgetMapper {
  toDomain(budgetPrisma: PrismaBudget): BudgetEntity {
    return new BudgetEntity({
      id: budgetPrisma.id,
      commissionStatus: commissionStatusFx(
        budgetPrisma.commissionStatus.toString()
      ),
      companyId: !budgetPrisma.companyId ? null : budgetPrisma.companyId,
      shortId: budgetPrisma.shortId,
      customer: budgetPrisma.customer,
      saller: budgetPrisma.saller,
      discont: budgetPrisma.discont,
      discontPercent: budgetPrisma.discontPercent,
      subTotal: budgetPrisma.subTotal,
      total: budgetPrisma.total,
      itemsCount: !budgetPrisma.itemsCount ? 0 : budgetPrisma.itemsCount,
      budgetItems: budgetPrisma.budgetItems.map((budgetItem) => {
        return new BudgetItemEntity({
          id: budgetItem.id,
          itemOrd: budgetItem.itemOrd,
          amount_unit: budgetItem.amount_unit,
          discont: budgetItem.discont,
          description: budgetItem.description,
          height: budgetItem.height,
          width: budgetItem.width,
          measure: budgetItem.measure,
          subTotal: budgetItem.subTotal,
          quantity: budgetItem.quantity,
          total: budgetItem.total,
          createdAt: budgetItem.createdAt,
          updatedAt: budgetItem.updatedAt,
        });
      }),
      createdAt: budgetPrisma.createdAt,
      updatedAt: budgetPrisma.updatedAt,
    });
  }

  toPrisma(budget: BudgetEntity): Budget {
    return {
      id: budget.id,
      shortId: budget.shortId,
      customer: budget.customer,
      saller: budget.saller ? budget.saller : null,
      commissionStatus: budget.commissionStatus,
      companyId: !budget.companyId ? null : budget.companyId,
      discont: budget.discont,
      discontPercent: budget.discontPercent,
      subTotal: budget.subTotal,
      total: budget.total,
      itemsCount: !budget.itemsCount ? 0 : budget.itemsCount,
      createdAt: budget.createdAt,
      updatedAt: budget.updatedAt,
    };
  }
})();
