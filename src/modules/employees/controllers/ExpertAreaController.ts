import { Request, Response } from "express";
import { ExpertAreasRepository } from "../repositories/implementations/ExpertAreasRepository";
import { CreateExpertAreaService } from "../services/expertArea/CreateExpertAreaService";
import { ListExpertAreaService } from "../services/expertArea/ListExpertAreaService";
import { ShowExpertAreaService } from "../services/expertArea/ShowExpertAreaService";
import { UpdateExpertAreaService } from "../services/expertArea/UpdateExpertAreaService";

export class ExpertAreaController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const expertAreaRepository = new ExpertAreasRepository();
    const createExpertAreaService = new CreateExpertAreaService(
      expertAreaRepository
    );

    const expertArea = await createExpertAreaService.execute({
      name,
      description,
    });

    return response.json(expertArea);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const expertAreaRepository = new ExpertAreasRepository();
    const showExpertAreaService = new ShowExpertAreaService(
      expertAreaRepository
    );

    const expertArea = await showExpertAreaService.execute({ id });

    return response.json(expertArea);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const expertAreaRepository = new ExpertAreasRepository();
    const listExpertAreaService = new ListExpertAreaService(
      expertAreaRepository
    );

    const expertAreas = await listExpertAreaService.execute();

    return response.json(expertAreas);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const expertAreaRepository = new ExpertAreasRepository();
    const updateExpertAreaService = new UpdateExpertAreaService(
      expertAreaRepository
    );

    const expertArea = await updateExpertAreaService.execute({ id, name });

    return response.json(expertArea);
  }
}
