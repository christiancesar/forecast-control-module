import { Router } from "express";
import { GlassDepartmentController } from "../controllers/GlassDepartmentController";

const glassDepartmentRouter = Router();
const glassDepartmentController = new GlassDepartmentController();

glassDepartmentRouter.post('/', glassDepartmentController.index);

export default glassDepartmentRouter;