import { Router } from "express";
import { PeopleAddressesController } from "../controllers/PeopleAddressesController";

const addressesRoutes = Router();
const peopleAddressesController = new PeopleAddressesController();

addressesRoutes.post("/", peopleAddressesController.create);
addressesRoutes.patch("/update", peopleAddressesController.update);

export default addressesRoutes;
