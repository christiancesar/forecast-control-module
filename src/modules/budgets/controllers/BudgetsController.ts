import { Request, Response } from "express";
import ListBudgetsService from "../services/budgets/ListBudgetsService";
import ShowBudgetService from "../services/budgets/ShowBudgetService";

export default class BudgetsController {
  async index(request: Request, response: Response) {
    const listBudgetsService = new ListBudgetsService();
    const budgets = await listBudgetsService.execute();
    return response.json(budgets);
  }

  async show(request: Request, response: Response) {
    const { budgetId } = request.params;
    const showBudgetService = new ShowBudgetService();
    const budget = await showBudgetService.execute({ budgetId });
    return response.json(budget);
  }
}
