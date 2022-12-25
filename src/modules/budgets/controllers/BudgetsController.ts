import { Request, Response } from "express";
import BudgetsRepository from "../repositories/BudgetsRepository";
import ListBudgetsService from "../services/budgets/ListBudgetsService";
import ShowBudgetService from "../services/budgets/ShowBudgetService";

export default class BudgetsController {
  async index(request: Request, response: Response) {
    const budgetRepository = new BudgetsRepository();
    const listBudgetsService = new ListBudgetsService(budgetRepository);
    const budgets = await listBudgetsService.execute();

    return response.json(budgets);
  }

  async show(request: Request, response: Response) {
    const { budgetId } = request.params;

    const budgetRepository = new BudgetsRepository();
    const showBudgetService = new ShowBudgetService(budgetRepository);
    const budget = await showBudgetService.execute({ budgetId });

    return response.json(budget);
  }
}
