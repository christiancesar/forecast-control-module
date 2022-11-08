import { Router } from "express";
import budgetsRouter from "./modules/budgets/routes";
import departmentsRouter from "./modules/department/routers";
import departments from "./modules/department/routers";
import employeesRouter from "./modules/employees/routes";

const routes = Router();

routes.use('/budgets', budgetsRouter);
routes.use('/employees', employeesRouter);
routes.use('/departments', departmentsRouter);

export default routes;