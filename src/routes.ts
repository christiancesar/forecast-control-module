import { Router } from "express";
import budgetsRouter from "./budgets/routes";
import employeesRouter from "./employees/routes";

const routes = Router();

routes.use('/budgets', budgetsRouter)
routes.use('/employees', employeesRouter)

export default routes;