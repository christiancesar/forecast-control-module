import { Router } from "express";
import multer from "multer";
import ImportBudgetController from "../controllers/ImportBudgetController";

import { storage } from "../../../config/uploadStorage";
import BudgetsController from "../controllers/BudgetsController";
import BudgetsItemsController from "../controllers/BudgetsItemsController";

const upload = multer({ storage });

const budgetsRouter = Router();

const importBudgetController = new ImportBudgetController();
const budgetsController = new BudgetsController();
const budgetsItemsController = new BudgetsItemsController();

budgetsRouter.post(
  "/import",
  upload.single("budget"),
  importBudgetController.create
);

budgetsRouter.get("/items", budgetsItemsController.index);
budgetsRouter.get("/items/:budgetItemId", budgetsItemsController.show);

budgetsRouter.get("/", budgetsController.index);
budgetsRouter.get("/:budgetId", budgetsController.show);

export default budgetsRouter;
