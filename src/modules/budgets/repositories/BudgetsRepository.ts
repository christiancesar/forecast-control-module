import { prisma } from "../../../../prisma";
import Budget from "../entities/Budget";
import ICreateBudgetDTO from "../interfaces/ICreateBudgetDTO";

interface IBudgetsRepository {
  create(data: ICreateBudgetDTO): Promise<Budget>;
  update(budget: Budget): Promise<Budget>;
  findById(budgetId: string): Promise<Budget | null>;
  findAllBudgets(): Promise<Budget[]>;
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
    budgetItems
  }: ICreateBudgetDTO): Promise<Budget> {
    const budgetCreated = await prisma.budget.create({
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
          create: budgetItems
        }
      }
    })
    return budgetCreated
  }
  async update(budget: Budget): Promise<Budget> {
    const budgetUpdated = await prisma.budget.update({
      data: budget,
      where: {
        id: budget.id,
      }
    })
    return budgetUpdated
  }
  async findById(budgetId: string): Promise<Budget | null> {
    const budget = await prisma.budget.findFirst({
      where: {
        id: budgetId
      },
      include: {
        budgetItems: true
      }
    });
    return budget
  }

  async findAllBudgets(): Promise<Budget[]> {
    return prisma.budget.findMany({
      include: {
        budgetItems: true
      }
    });
  }
}