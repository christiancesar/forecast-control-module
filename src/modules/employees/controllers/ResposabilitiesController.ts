import { NextFunction, Request, Response } from "express";
import CreateResponsabilityService from '../services/responsabilities/CreateResponsabilityService';
import ListResponsabilitiesService from '../services/responsabilities/ListResponsabilitiesService';

export default class ResponsabilitiesController {

  async index(request: Request, response: Response, next: NextFunction) {
    const listResponsabilitiesService = new ListResponsabilitiesService();
    const serviceType = await listResponsabilitiesService.execute()
    return response.json(serviceType)
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const { description } = request.body;
    const createResponsabilityService = new CreateResponsabilityService()
    const serviceType = await createResponsabilityService.execute({ description })
    return response.json(serviceType)
  }


}