import {Router} from 'express';
import ResponsabilitiesController from '../controllers/ResposabilitiesController';
import ServicesTypesController from '../controllers/ServicesTypesController';

const employeesRouter = Router();

const servicesTypesController = new ServicesTypesController()
const responsabilitiesController = new ResponsabilitiesController()

employeesRouter.get('/')
employeesRouter.post('/')

employeesRouter.get('/responsabilities', responsabilitiesController.index)
employeesRouter.post('/responsabilities', responsabilitiesController.create)


employeesRouter.get('/servicestypes', servicesTypesController.index)
employeesRouter.post('/servicestypes', servicesTypesController.create)

export default employeesRouter;
