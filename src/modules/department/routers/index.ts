import { Router } from "express";
import { DepartmentsController } from "../controllers/DepartmentsController";

const departmentsRouter = Router();
const departmentsController = new DepartmentsController();

departmentsRouter.post("/", departmentsController.create);
departmentsRouter.get("/", departmentsController.list);
departmentsRouter.get("/:id", departmentsController.show);
departmentsRouter.patch("/update/:id", departmentsController.update);

export default departmentsRouter;
