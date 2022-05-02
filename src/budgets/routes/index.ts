import { Router } from "express";
import multer from "multer";
import ImportBudgetController from "../controllers/ImportBudgetController";

import { storage } from "../../config/uploadStorage"

const upload = multer({ storage });

const budgetsRouter = Router();

const importBudgetController = new ImportBudgetController();

budgetsRouter.post('/import', upload.single('budget'), importBudgetController.create)

export default budgetsRouter;