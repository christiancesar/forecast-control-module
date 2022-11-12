import { Router } from "express";
import { EmployeeCommissioedController } from "../controllers/EmployeeCommissioedController";

const commissionedByRoutes = Router();
const employeeCommissioedController = new EmployeeCommissioedController();

commissionedByRoutes.post("/", employeeCommissioedController.create);
commissionedByRoutes.get("/", employeeCommissioedController.show);
commissionedByRoutes.patch("/update/:id", employeeCommissioedController.update);
commissionedByRoutes.delete("/delete/:id", employeeCommissioedController.delete);


export default commissionedByRoutes;