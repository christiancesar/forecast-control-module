import { Router } from "express";
import StageController from "../controllers/StageController";

const stagesRouter = Router();

const stageController = new StageController();

stagesRouter.post('/', stageController.create)
stagesRouter.get('/', stageController.index)

export default stagesRouter