import { prisma } from "@shared/database/prisma";
import BudgetEntity from "../entities/BudgetEntity";
import { CreateBudgetDTO } from "../interfaces/ICreateBudgetDTO";
import PrismaBudgetMapper from "./mappers/PrismaBudgetMapper";

type UpdateBudgetDTO = {
  id: string;
  shortId: number;
  customer: string;
  saller?: string | null;
  discont: number;
  discontPercent: number;
  subTotal: number;
  total: number;
  itemsCount: number;
  updatedAt: Date;
  createdAt: Date;
};

type FindBudgetById = {
  id: string;
};

interface IBudgetsRepository {
  create(data: CreateBudgetDTO): Promise<BudgetEntity>;
  update(budget: UpdateBudgetDTO): Promise<BudgetEntity>;
  findBudgetById(budget: FindBudgetById): Promise<BudgetEntity | null>;
  findAllBudgets(): Promise<BudgetEntity[]>;
}

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

  async findBudgetById(budget: FindBudgetById): Promise<BudgetEntity | null> {
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
