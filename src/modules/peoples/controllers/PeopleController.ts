import { Request, Response } from "express";
import { PeopleRepository } from "../repositories/PeopleRepository";
import { CreatePeopleService } from "../services/people/CreatePeopleService";
import { ListPeoplesService } from "../services/people/ListPeoplesService";
import { ShowPeopleService } from "../services/people/ShowPeopleService";
import PeopleViewMapper from "./mappers/PeopleViewMapper";

type PeopleCreateRequest = {
  email: string | null;
  phone: string[];
  note: string | null;
  typePerson: string; //Pessoa Fisica ou Juridica

  fistName: string;
  lastName: string;
  individualTaxIdentification: string | null; //CPF(ITIN)

  tradingName: string; //Nome Fantasia
  comapanyName: string; //Razão Social
  stateRegistration: string | null; //Inscrição Estadual
  employerIdentificationNumber: string | null; //CNPJ (EIN)

  isCustomer: boolean;
  isSupplier: boolean;
  isEmployee: boolean;
};

export class PeopleController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      email,
      phone,
      note,
      typePerson,
      fistName,
      lastName,
      individualTaxIdentification,
      tradingName,
      comapanyName,
      stateRegistration,
      employerIdentificationNumber,
      isCustomer,
      isSupplier,
      isEmployee,
    } = request.body as PeopleCreateRequest;

    const peopleRepository = new PeopleRepository();
    const peopleCreateService = new CreatePeopleService(peopleRepository);
    const people = await peopleCreateService.execute({
      email,
      phone,
      note,
      typePerson,
      fistName,
      lastName,
      individualTaxIdentification,
      tradingName,
      comapanyName,
      stateRegistration,
      employerIdentificationNumber,
      isCustomer,
      isSupplier,
      isEmployee,
    });

    return response.json(people);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const peopleRepository = new PeopleRepository();
    const showPeopleService = new ShowPeopleService(peopleRepository);
    const people = await showPeopleService.execute({ peopleId: id });

    return response.json(PeopleViewMapper.toView(people));
  }

  async list(request: Request, response: Response): Promise<Response> {
    const peopleRepository = new PeopleRepository();
    const listPeoplesService = new ListPeoplesService(peopleRepository);

    const peoples = await listPeoplesService.execute();

    return response.json(peoples.map(PeopleViewMapper.toView));
  }
}
