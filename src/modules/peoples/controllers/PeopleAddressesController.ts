import { Request, Response } from "express";
import { AddressRepository } from "../repositories/AddressRepository";
import { PeopleRepository } from "../repositories/PeopleRepository";
import { CreatePeopleAddressesService } from "../services/peopleAddress/CreatePeopleAddressesService";
import { UpdatePeopleAddressesService } from "../services/peopleAddress/UpdatePeopleAdressesService";

export class PeopleAddressesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { peopleId, street, city, state, stateAcronym, neighborhood, zip } =
      request.body;

    const addressRepository = new AddressRepository();
    const peopleRepository = new PeopleRepository();
    const createPeopleAddressesService = new CreatePeopleAddressesService(
      addressRepository,
      peopleRepository
    );

    const address = await createPeopleAddressesService.execute({
      street,
      city,
      state,
      stateAcronym,
      neighborhood,
      zip,
      peopleId,
    });

    return response.status(201).json(address);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      peopleId,
      id,
      street,
      city,
      state,
      stateAcronym,
      neighborhood,
      zip,
    } = request.body;

    const addressRepository = new AddressRepository();
    const peopleRepository = new PeopleRepository();
    const updatePeopleAddressesService = new UpdatePeopleAddressesService(
      addressRepository,
      peopleRepository
    );

    const address = await updatePeopleAddressesService.execute({
      peopleId,
      addressId: id,
      street,
      city,
      state,
      stateAcronym,
      neighborhood,
      zip,
    });

    return response.status(201).json(address);
  }
}
