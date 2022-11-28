import BudgetEntity from "../../budgets/entities/BudgetEntity";
import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { PeopleEntityAbstract } from "../../peoples/entities/PeopleEntityAbstract";

export class CompanyEntity extends PeopleEntityAbstract {
  tradingName: string; // Nome Fantasia
  comapanyName: string; // Razão Social
  budget: BudgetEntity[];
  employees: EmployeeEntity[];

  constructor({
    id,
    tradingName,
    comapanyName,
    note,
    budget,
    employees,
    email,
    phone,
    addresses,
    createdAt,
    updatedAt,
  }: CompanyEntity) {
    super({ id, email, phone, addresses, note, createdAt, updatedAt });

    this.tradingName = tradingName;
    this.comapanyName = comapanyName;
    this.budget = budget;
    this.employees = employees;
  }
}
