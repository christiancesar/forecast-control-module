import { prisma } from "@shared/database/prisma";
import BudgetItem from "../entities/BudgetItemEntity";
import { CreateBudgetItemDTO } from "../interfaces/ICreateBudgetItemDTO";

interface IBudgetsItemsRepository {
  create(data: CreateBudgetItemDTO): Promise<BudgetItem>;
  update(budgetItem: BudgetItem): Promise<BudgetItem>;
  findById(budgetItemId: string): Promise<BudgetItem | null>;
  findAllBudgetsItems(): Promise<BudgetItem[]>;
}

export default class BudgetItemRepository implements IBudgetsItemsRepository {
  async create(budgetItem: CreateBudgetItemDTO): Promise<BudgetItem> {
    const budgetItemCreated = await prisma.budgetItem.create({
      data: budgetItem,
    });

    return budgetItemCreated;
  }

  async update(budgetItem: BudgetItem): Promise<BudgetItem> {
    const budgetItemCreated = await prisma.budgetItem.update({
      data: budgetItem,
      where: {
        id: budgetItem.id,
      },
    });
    return budgetItemCreated;
  }

  async findById(budgetItemId: string): Promise<BudgetItem | null> {
    const budgetItemCreated = await prisma.budgetItem.findFirst({
      where: { id: budgetItemId },
    });
    return budgetItemCreated;
  }

  async findAllBudgetsItems(): Promise<BudgetItem[]> {
    return prisma.budgetItem.findMany();
  }
}
