import { parse } from "csv-parse";
import fs from "fs";
import Budget from "../interfaces/ICreateBudgetDTO";
import BudgetsItemsRepository from "../repositories/BudgetsItemsRepository";
import BudgetsRepository from "../repositories/BudgetsRepository";

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
  constructor(
    private budgetsRepository: BudgetsRepository,
    private budgetsItemsRepository: BudgetsItemsRepository
  ) {}

  async execute({
    shortId,
    customer,
    saller,
    discont,
    subTotal,
    total,
    file,
  }: IRequest): Promise<Budget> {
    const discontPercent = Math.round(
      100 - (Number(total) * 100) / Number(subTotal)
    );

    const budget = await this.budgetsRepository.create({
      shortId: Number(shortId),
      customer,
      saller,
      discont: Number(discont),
      subTotal: Number(subTotal),
      total: Number(total),
      discontPercent,
      itemsCount: 0,
      budgetItems: [],
    });

    const contactsReadStream = fs.createReadStream(file);
    const parsers = parse({
      from_line: 2,
    });

    const parseCSV = contactsReadStream.pipe(parsers);

    parseCSV.on("data", async (line) => {
      const [ordenation, description, width, height, quantity, amount_unit] =
        line.map((cell: string) => cell.trim());

      budget.itemsCount += Number(quantity);

      const subTotal = parseFloat(
        (Number(quantity) * parseFloat(amount_unit)).toFixed(2)
      );

      const discont = parseFloat(
        (subTotal * (discontPercent / 100)).toFixed(2)
      );

      const total = parseFloat((subTotal - discont).toFixed(2));

      const budgetItem = await this.budgetsItemsRepository.create({
        itemOrd: Number(ordenation),
        description,
        amount_unit: Number(amount_unit),
        discont,
        height: Number(height),
        quantity: Number(quantity),
        subTotal,
        total,
        width: Number(width),
        measure: `${width}x${height}`,
      });

      budget.budgetItems.push(budgetItem);
    });

    await new Promise((resolve) => parseCSV.on("end", resolve));

    return budget;
  }
}
