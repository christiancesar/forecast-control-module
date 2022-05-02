
import fs from 'fs';
import { parse } from 'csv-parse';


import BudgetItem from '../interfaces/IBudgetItens';
import Budget from '../interfaces/IBudget';

interface IRequest {
  shortId: number;
  customer: string;
  saller: string;
  discont: number;
  subTotal: number;
  total: number;
  file: string;
}

export default class ImportBudgetService {
  async execute({ shortId, customer, saller, discont, subTotal, total, file }: IRequest): Promise<Budget> {
    const contactsReadStream = fs.createReadStream(file);
    const parsers = parse({
      from_line: 2,
    });

    const parseCSV = contactsReadStream.pipe(parsers);

    let budget = {} as Budget;
    let budgetItens = [] as BudgetItem[];
    let itensCount = 0

    const discontPercent = Math.round(100 - (Number(total) * 100 / Number(subTotal)));

    parseCSV.on('data', async (line) => {
      const [ordenation, description, width, height, quantity, amount_unit] = line.map((cell: string) =>
        cell.trim(),
      );

      itensCount += Number(quantity);

      const subTotal = parseFloat((Number(quantity) * parseFloat(amount_unit)).toFixed(2))

      const discont = parseFloat((subTotal * (discontPercent / 100)).toFixed(2))

      const total = parseFloat((subTotal - discont).toFixed(2))

      budgetItens.push({
        ordenation: Number(ordenation),
        description: description,
        width: Number(width),
        height: Number(height),
        quantity: Number(quantity),
        amount_unit: Number(amount_unit),
        discont,
        subTotal,
        total
      })
    })

    await new Promise(resolve => parseCSV.on('end', resolve));
    const date = new Date()

    Object.assign<Budget, Budget>(budget, {
      shortId: Number(shortId),
      customer,
      saller,
      discont: Number(discont),
      subTotal: Number(subTotal),
      total: Number(total),
      budgetItens,
      createdAt: date,
      updatedAt: date,
      discontPercent,
      itensCount
    })

    return budget
  }
}