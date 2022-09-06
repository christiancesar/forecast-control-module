import { NextFunction, Request, Response } from "express";
import CreateStageService from "../services/stage/CreateStageService";
import ListStagesService from "../services/stage/ListStagesService";

export default class StageController {
  async create(request: Request, response: Response, next: NextFunction) {
    const { description } = request.body;

    const createStageService = new CreateStageService();
    const stage = await createStageService.execute({ description });

    return response.json(stage);
  }

  async index(request: Request, response: Response, next: NextFunction) {
    const listStagesService = new ListStagesService();
    const stages = await listStagesService.execute();

    return response.json(stages);
  }
}