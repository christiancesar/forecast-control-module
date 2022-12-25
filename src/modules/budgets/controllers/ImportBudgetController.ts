import { Request, Response } from "express";
import BudgetItemRepository from "../repositories/BudgetsItemsRepository";
import BudgetsRepository from "../repositories/BudgetsRepository";
import ImportBudgetService from "../services/ImportBudgetService";

interface IRequest {
  shortId: string;
  customer: string;
  saller: string;
  discont: string;
  subTotal: string;
  total: string;
}

export default class ImportBudgetController {
  async create(request: Request, response: Response) {
    const { shortId, customer, saller, discont, subTotal, total } =
      request.body as IRequest;

    const budgetsRepository = new BudgetsRepository();
    const budgetItemRepository = new BudgetItemRepository();

    const importBudgetService = new ImportBudgetService(
      budgetsRepository,
      budgetItemRepository
    );

    const budget = await importBudgetService.execute({
      shortId,
      customer,
      saller,
      discont,
      subTotal,
      total,
      file: request.file!.path,
    });

    return response.json(budget);
  }
}
