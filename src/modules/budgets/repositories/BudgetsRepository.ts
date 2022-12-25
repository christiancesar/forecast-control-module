import { prisma } from "@shared/database/prisma";
import { CreateBudgetDTO } from "../dtos/budgetsDTOs/CreateBudgetDTO";
import { FindBudgetByIdDTO } from "../dtos/budgetsDTOs/FindBudgetByIdDTO";
import { BudgetEntity } from "../entities/BudgetEntity";
import { IBudgetsRepository } from "./Interfaces/IBudgetsRespository";
import PrismaBudgetMapper from "./mappers/PrismaBudgetMapper";

export default class BudgetsRepository implements IBudgetsRepository {
  async create({
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
    const budget = await prisma.budget.create({
      data: {
        shortId,
        customer,
        saller,
        discont,
        discontPercent,
        subTotal,
        total,
        itemsCount,
        budgetItems: {
          create: budgetItems,
        },
      },
      include: {
        budgetItems: true,
      },
    });

    return PrismaBudgetMapper.toDomain(budget);
  }

  async update(budget: BudgetEntity): Promise<BudgetEntity> {
    const budgetUpdated = await prisma.budget.update({
      data: PrismaBudgetMapper.toPrisma(budget),
      where: {
        id: budget.id,
      },
      include: {
        budgetItems: true,
      },
    });

    return PrismaBudgetMapper.toDomain(budgetUpdated);
  }

  async findBudgetById(
    budget: FindBudgetByIdDTO
  ): Promise<BudgetEntity | null> {
    const budgetFinded = await prisma.budget.findFirst({
      where: {
        id: budget.id,
      },
      include: {
        budgetItems: true,
      },
    });

    if (!budgetFinded) {
      return null;
    }

    return PrismaBudgetMapper.toDomain(budgetFinded);
  }

  async findAllBudgets(): Promise<BudgetEntity[]> {
    const budgets = await prisma.budget.findMany({
      include: {
        budgetItems: true,
      },
    });

    return budgets.map((budget) => PrismaBudgetMapper.toDomain(budget));
  }
}
