import { Router } from 'express';
import EmployeesController from '../controllers/EmployeesController';
import commissionedByRoutes from './commissionedByRoutes';
import expertAreaRoutes from './expertAreaRoutes';

const employeesRouter = Router();
const employeesController = new EmployeesController();

employeesRouter.use('/expert', expertAreaRoutes);
employeesRouter.use('/commissioned', commissionedByRoutes);

employeesRouter.post('/', employeesController.create);
employeesRouter.get('/:id', employeesController.show);
employeesRouter.get('/', employeesController.list);
employeesRouter.patch('/update/:id', employeesController.update);




export default employeesRouter;
