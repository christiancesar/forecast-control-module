import cors from "cors";
import express from "express";
import { prisma } from "@shared/database/prisma";
import ImportXLSXtoNodeService from "../modules/budgets/services/ImportXLSXtoNodeService";
import routes from "./routes";

const importXLSXtoNodeService = new ImportXLSXtoNodeService();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, async () => {
  await prisma.$connect();
  console.log("Control started on port 3000🚀 ");
  // importXLSXtoNodeService.execute();
});
