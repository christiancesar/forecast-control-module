
import fs from 'fs';
import { parse } from 'csv-parse';


import BudgetItem from '../interfaces/ICreateBudgetItemDTO';
import Budget from '../interfaces/ICreateBudgetDTO';
import BudgetsRepository from '../repositories/BudgetsRepository';
import BudgetsItemsRepository from '../repositories/BudgetsItemsRepository';

interface IRequest {
  shortId: string;
  customer: string;
  saller: string;
  discont: string;
  subTotal: string;
  total: string;
  file: string;
}

export default class ImportBudgetService {
  async execute({ shortId, customer, saller, discont, subTotal, total, file }: IRequest): Promise<Budget> {

    const discontPercent = Math.round(100 - (Number(total) * 100 / Number(subTotal)));

    const budget = await BudgetsRepository.create({ 
      shortId: Number(shortId), 
      customer, 
      saller, 
      discont: Number(discont), 
      subTotal: Number(subTotal), 
      total: Number(total), 
      discontPercent, 
      itemsCount: 0 
    })

    const contactsReadStream = fs.createReadStream(file);
    const parsers = parse({
      from_line: 2,
    });

    const parseCSV = contactsReadStream.pipe(parsers);

    parseCSV.on('data', async (line) => {
      const [ordenation, description, width, height, quantity, amount_unit] = line.map((cell: string) =>
        cell.trim(),
      );

      budget.itemsCount += Number(quantity);

      const subTotal = parseFloat((Number(quantity) * parseFloat(amount_unit)).toFixed(2))

      const discont = parseFloat((subTotal * (discontPercent / 100)).toFixed(2))

      const total = parseFloat((subTotal - discont).toFixed(2))

      const budgetItem = await BudgetsItemsRepository.create({
        itemOrd: Number(ordenation),
        description,
        amount_unit: Number(amount_unit),
        discont,
        height: Number(height),
        quantity: Number(quantity),
        subTotal,
        total,
        width: Number(width)
      })

      budget.budgetItems.push(budgetItem);

    })

    await new Promise(resolve => parseCSV.on('end', resolve));


    return budget
  }
}