import { Router } from "express";
import budgetsRouter from "../../modules/budgets/routes";
import departmentsRouter from "../../modules/department/routers";
import employeesRouter from "../../modules/employees/routes";
import usersRouter from "../../modules/users/routes/users";

const routes = Router();
routes.use('/users', usersRouter)
routes.use('/budgets', budgetsRouter);
routes.use('/employees', employeesRouter);
routes.use('/departments', departmentsRouter);

export default routes;