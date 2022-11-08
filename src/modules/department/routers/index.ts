import { Router } from "express";
import glassDepartmentRouter from "./glassDepartmentRouter";

const departmentsRouter = Router();

departmentsRouter.use('/glass', glassDepartmentRouter);

export default departmentsRouter;