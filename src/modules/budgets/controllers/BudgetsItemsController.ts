import { NextFunction, Request, Response } from "express";
import ListBudgetsItemsService from "../services/budgetsItems/ListBudgetsItemsService";
import ShowBudgetItemService from "../services/budgetsItems/ShowBudgetItemService";

export default class BudgetsItemsController {
  async index(request: Request, response: Response, next: NextFunction) {
    const listBudgetsItemsService = new ListBudgetsItemsService();
    const budgetsItems = await listBudgetsItemsService.execute();
    return response.json(budgetsItems);
  }

  async show(request: Request, response: Response, next: NextFunction) {
    const { budgetItemId } = request.params;
    const showBudgetItemService = new ShowBudgetItemService();
    const budgetItem = await showBudgetItemService.execute({ budgetItemId });
    return response.json(budgetItem);
  }
}
