import xlsx from 'node-xlsx';
import fs from 'fs';
import path from 'path';
import { read } from "xlsx";
import Budget from '../entities/Budget';
import BudgetItem from '../entities/BudgetItem';

class ImportXLSXtoNodeService {
  async execute() {
    const filePath = path.resolve(__dirname, '..', '..', '..', 'assets', 'sheets');
    console.log(filePath);

    //Parse a file
    const workSheetsFromFile = xlsx.parse(`${filePath}/niedja1607.xlsx`);

    // console.log('workSheetsFromFile');
    // console.log(JSON.stringify(workSheetsFromFile, null, 2));
    // fs.writeFileSync("niedja2018.json", JSON.stringify(workSheetsFromFile, null,2));

    const customerFmt = (workSheetsFromFile[0].data[0] as Array<any>)[0] as string;
    
    const shortId = Number((customerFmt.match(/\d+(\.\d)*/g) as Array<any>)[0] as number);
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

    console.log(budget)
    let budgetItems: BudgetItem[] = [];

    for (let index = 8; index < workSheetsFromFile[0].data.length; index++) {
      if ((workSheetsFromFile[0].data[index] as Array<any>)[0]){
        const itemOrd = (workSheetsFromFile[0].data[index] as Array<any>)[0] as number;
        const description = (workSheetsFromFile[0].data[index] as Array<any>)[1] as string;
        const measure = (workSheetsFromFile[0].data[index] as Array<any>)[2] as string;
        const quantity = (workSheetsFromFile[0].data[index] as Array<any>)[3] as number;
        const amount_unit = (workSheetsFromFile[0].data[index] as Array<any>)[4] as number;
        const total = quantity * amount_unit;
        const subTotal = quantity * amount_unit;
        const discont = parseFloat((subTotal * (discontPercent / 100)).toFixed(2))
        const width = Number((measure.match(/(^\d+(\.\d)*)/g) as Array<any>)[0]);
        const height = Number((measure.match(/(\d+(\.\d)*)$/g)as Array<any>)[0])

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

        // console.log(shortId)
        // console.log(description)
        // console.log(measure)
        // console.log(quantity)
        // console.log(amount_unit)
        // console.log("-----------------------------")
      }
    }

    console.log(budgetItems)
    



  }
}

export default ImportXLSXtoNodeService;