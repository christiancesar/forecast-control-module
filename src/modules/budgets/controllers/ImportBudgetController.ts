import { NextFunction, Request, Response } from 'express';
import ImportBudgetService from '../services/ImportBudgetService';

interface IRequest {
  shortId: string;
  customer: string;
  saller: string;
  discont: string;
  subTotal: string;
  total: string;
}

export default class ImportBudgetController {
  async create(request: Request, response: Response, next: NextFunction) {
    const { shortId,
      customer,
      saller,
      discont,
      subTotal,
      total,
    } = request.body as IRequest

    const importBudgetService = new ImportBudgetService()

    const budget = await importBudgetService.execute({
      shortId,
      customer,
      saller,
      discont,
      subTotal,
      total,
      file: request.file!.path,
    })

    return response.json(budget)
  }
}