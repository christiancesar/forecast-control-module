import BudgetEntity from "../../budgets/entities/BudgetEntity";
import { EmployeeEntity } from "../../employees/entities/EmployeeEntity";
import { PeopleEntityAbstract } from "../../peoples/entities/PeopleEntityAbstract"
import { UserEntity } from "../../users/entities/UserEntity";

export class CompanyEntity extends PeopleEntityAbstract{
  tradingName: string; // Nome Fantasia
  comapanyName: string; // Razão Social
  budget: BudgetEntity[];
  employees: EmployeeEntity[];
  customers: UserEntity[];
  
  constructor({
    id,
    tradingName,
    comapanyName,
    budget,
    employees,
    customers,
    email,
    phone,
    address,
    createdAt,
    updatedAt
  }: CompanyEntity) {
    super({ id, email, phone, address, createdAt, updatedAt });
    
    this.tradingName = tradingName;
    this.comapanyName = comapanyName;
    this.budget = budget;
    this.employees = employees;
    this.customers = customers;  

  }
}