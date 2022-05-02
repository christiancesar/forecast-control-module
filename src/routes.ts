import { Router } from "express";
import budgetsRouter from "./budgets/routes";

const routes = Router();

routes.use('/budgets', budgetsRouter)


export default routes;