import { Request, Response } from "express";
import PokemonController from "../PokemonController.js";
import { testsPokemons } from "../../data/fixtures.js";

describe("Given the getPokemons function", () => {
  describe("When it receives a request asking for pokemons", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    const pokemonController = new PokemonController(testsPokemons);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatusCode = 200;

      pokemonController.getPokemons(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the received response's method json with 'Eevee' and 'Mew'", () => {
      const expectedPokemons = { pokemons: testsPokemons };

      pokemonController.getPokemons(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedPokemons);
    });
  });
});
