import xlsx from 'node-xlsx';
import path from 'path';
import Budget from '../entities/Budget';
import BudgetItem from '../entities/BudgetItem';
import BudgetItemRepository from '../repositories/BudgetsItemsRepository';
import BudgetsRepository from '../repositories/BudgetsRepository';

class ImportXLSXtoNodeService {
  private budgetRepository: BudgetsRepository;
  private budgetItemRepository: BudgetItemRepository;

  constructor() {
    this.budgetRepository = new BudgetsRepository();
    this.budgetItemRepository = new BudgetItemRepository();
  }
  async execute() {
    const filePath = path.resolve(__dirname, '..', '..', '..', 'assets', 'sheets');
    console.log(filePath);

    const workSheetsFromFile = xlsx.parse(`${filePath}/niedja2018.xlsx`);

    const customerFmt = (workSheetsFromFile[0].data[0] as Array<any>)[0] as string;

    const shortId = Number((customerFmt.match(/\d+(\.\d)*/g) as Array<any>)[0] as number);
    
    //verificar se orçamento existe, antes de adicionar novamente.
    //Pode dar opção de atalizar dados existente.
    
    const customer = customerFmt.replace(String(shortId), '').trim();
    const total = (workSheetsFromFile[0].data[1] as Array<any>)[1] as number;
    const discont = (workSheetsFromFile[0].data[2] as Array<any>)[1] as number;
    const subTotal = total - discont;
    const discontPercent = Number((100 - ((subTotal * 100) / total)).toFixed(2));

    const budget = new Budget({
      shortId,
      customer,
      total,
      discont,
      subTotal,
      discontPercent
    })

    let budgetItems: BudgetItem[] = [];

    for (let index = 8; index < workSheetsFromFile[0].data.length; index++) {
      if ((workSheetsFromFile[0].data[index] as Array<any>)[0]) {
        const itemOrd = (workSheetsFromFile[0].data[index] as Array<any>)[0] as number;
        const description = (workSheetsFromFile[0].data[index] as Array<any>)[1] as string;
        const measure = (workSheetsFromFile[0].data[index] as Array<any>)[2] as string;
        const quantity = (workSheetsFromFile[0].data[index] as Array<any>)[3] as number;
        const amount_unit = (workSheetsFromFile[0].data[index] as Array<any>)[4] as number;
        const total = quantity * amount_unit;
        const subTotal = quantity * amount_unit;
        const discont = parseFloat((subTotal * (discontPercent / 100)).toFixed(2))
        const width = Number((measure.match(/(^\d+(\.\d)*)/g) as Array<any>)[0]);
        const height = Number((measure.match(/(\d+(\.\d)*)$/g) as Array<any>)[0])

        const budgetItem = new BudgetItem({
          itemOrd,
          description,
          measure,
          width,
          height,
          quantity,
          amount_unit,
          total,
          discont,
          subTotal,
        })

        budgetItems.push(budgetItem);

      }
    }

    this.budgetRepository.create({
      customer: budget.customer,
      discont: budget.discont,
      discontPercent: budget.discontPercent,
      shortId: budget.shortId,
      subTotal: budget.subTotal,
      total: budget.total,
      budgetItems
    })
  }
}

export default ImportXLSXtoNodeService;