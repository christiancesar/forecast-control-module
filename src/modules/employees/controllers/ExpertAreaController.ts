import { Request, Response } from "express";
import { CreateExpertAreaService } from "../services/expertArea/CreateExpertAreaService";
import { ListExpertAreaService } from "../services/expertArea/ListExpertAreaService";
import { ShowExpertAreaService } from "../services/expertArea/ShowExpertAreaService";
import { UpdateExpertAreaService } from "../services/expertArea/UpdateExpertAreaService";

export class ExpertAreaController {
  constructor() { }

  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createExpertAreaService = new CreateExpertAreaService();

    const expertArea = await createExpertAreaService.execute({
      name,
    });

    return response.json(expertArea);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showExpertAreaService = new ShowExpertAreaService();
    const expertArea = await showExpertAreaService.execute({ id });

    return response.json(expertArea);

  }

  async list(request: Request, response: Response): Promise<Response> {
    const listExpertAreaService = new ListExpertAreaService();
    const expertAreas = await listExpertAreaService.execute();

    return response.json(expertAreas);


  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateExpertAreaService = new UpdateExpertAreaService();
    const expertArea = await updateExpertAreaService.execute({ id, name });

    return response.json(expertArea);
  }





































}