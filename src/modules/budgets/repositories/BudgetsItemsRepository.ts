import { prisma } from "@shared/database/prisma";
import { CreateBudgetItemDTO } from "../dtos/budgetItemsDTOs/CreateBudgetItemDTO";
import {
  default as BudgetItem,
  default as BudgetItemEntity,
} from "../entities/BudgetItemEntity";
import {
  FindBudgetItemByIdDTO,
  IBudgetsItemsRepository,
} from "./Interfaces/IBudgetItemsRepository";
import PrismaBudgetItemMapper from "./mappers/PrismaBudgetItemMapper";

export default class BudgetItemRepository implements IBudgetsItemsRepository {
  async createBudgetItem(budgetItem: CreateBudgetItemDTO): Promise<BudgetItem> {
    const budgetItemCreated = await prisma.budgetItem.create({
      data: budgetItem,
    });

    return budgetItemCreated;
  }

  async updateBudgetItem(budgetItem: BudgetItemEntity): Promise<BudgetItem> {
    const budgetItemCreated = await prisma.budgetItem.update({
      data: PrismaBudgetItemMapper.toPrisma(budgetItem),
      where: {
        id: budgetItem.id,
      },
    });
    return budgetItemCreated;
  }

  async findBudgetItemById(
    budgetItem: FindBudgetItemByIdDTO
  ): Promise<BudgetItem | null> {
    const budgetItemCreated = await prisma.budgetItem.findFirst({
      where: { id: budgetItem.id },
    });
    return budgetItemCreated;
  }

  async findAllBudgetsItems(): Promise<BudgetItem[]> {
    return prisma.budgetItem.findMany();
  }
}
