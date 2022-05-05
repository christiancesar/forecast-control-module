import { NextFunction, Request, Response } from "express";
import CreateServiceTypeService from '../services/servicesTypes/CreateServiceTypeService';
import ListServiceTypeService from "../services/servicesTypes/ListServicesTypesService";

export default class ServicesTypesController {

  async index(request: Request, response: Response, next: NextFunction) {
    const listServiceTypeService = new ListServiceTypeService();
    const serviceType = await listServiceTypeService.execute()
    return response.json(serviceType)
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const { description, commissionPercent } = request.body;
    const createServiceTypeService = new CreateServiceTypeService()
    const serviceType = await createServiceTypeService.execute({ description, commissionPercent })
    return response.json(serviceType)
  }


}