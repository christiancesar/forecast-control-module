import Stage from "./Stage";

export default class StageProduction extends Stage {
  budgetId: string;

  constructor({ id, budgetId, description, createdAt, updatedAt }: StageProduction) {
    super({ id, description, createdAt, updatedAt })
    this.budgetId = budgetId;
  }

  public getStageProduction() {
    return `Id: ${this.id} \n Description: ${this.description} \n BudgetId: ${this.budgetId} \n CreatedAt: ${this.createdAt} \n UpdatedAt: ${this.updatedAt}`;
  }
}