import { Request, Response } from "express";
import BudgetItemRepository from "../repositories/BudgetsItemsRepository";
import ListBudgetsItemsService from "../services/budgetsItems/ListBudgetsItemsService";
import ShowBudgetItemService from "../services/budgetsItems/ShowBudgetItemService";

export default class BudgetsItemsController {
  async index(request: Request, response: Response) {
    const budgetItemRepository = new BudgetItemRepository();
    const listBudgetsItemsService = new ListBudgetsItemsService(
      budgetItemRepository
    );
    const budgetsItems = await listBudgetsItemsService.execute();
    return response.json(budgetsItems);
  }

  async show(request: Request, response: Response) {
    const { budgetItemId } = request.params;

    const budgetItemRepository = new BudgetItemRepository();
    const showBudgetItemService = new ShowBudgetItemService(
      budgetItemRepository
    );
    const budgetItem = await showBudgetItemService.execute({ budgetItemId });

    return response.json(budgetItem);
  }
}
