import { Router } from "express";
import budgetsRouter from "./modules/budgets/routes";
import employeesRouter from "./modules/employees/routes";

const routes = Router();

routes.use('/budgets', budgetsRouter)
routes.use('/employees', employeesRouter)

export default routes;