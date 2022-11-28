import { Router } from "express";
import { ExpertAreaController } from "../controllers/ExpertAreaController";

const expertAreaRoutes = Router();
const expertAreaController = new ExpertAreaController();

expertAreaRoutes.post("/", expertAreaController.create);
expertAreaRoutes.get("/:id", expertAreaController.show);
expertAreaRoutes.get("/", expertAreaController.list);
expertAreaRoutes.patch("/update/:id", expertAreaController.update);

export default expertAreaRoutes;
