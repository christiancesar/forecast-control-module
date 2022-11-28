import { Router } from "express";
import { PeopleController } from "../controllers/PeopleController";
import addressesRoutes from "./addressesRoutes";

const peopleRoutes = Router();
const peopleController = new PeopleController();

peopleRoutes.post("/", peopleController.create);
peopleRoutes.get("/:id", peopleController.show);

peopleRoutes.use("/addresses", addressesRoutes);

export default peopleRoutes;
