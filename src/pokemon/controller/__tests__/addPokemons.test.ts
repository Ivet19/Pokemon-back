import { Request, Response } from "express";
import { testsPokemons, jigglypuff, mew, eevee } from "../../data/fixtures.js";
import PokemonController from "../PokemonController.js";

describe("Given the addPokemon method", () => {
  let pokemons = testsPokemons;

  let pokemonController = new PokemonController(pokemons);

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    pokemons = [mew, eevee];
    jest.clearAllMocks();
    pokemonController = new PokemonController(pokemons);
  });

  describe("When it receives a request with Jigglypuff", () => {
    const req = {
      body: jigglypuff,
    } as Pick<Request, "body">;

    test("Then it should call the response's status method with status 201", () => {
      const expectedStatusCode = 201;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method containing a pokemon with the name Jigglipuff", () => {
      const { name } = jigglypuff;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });
  });

  describe("When it receives a request with Mew", () => {
    const req = {
      body: mew,
    } as Pick<Request, "body">;

    test("Then it should call the response's method status with 409", () => {
      const expectedStatusCode = 409;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method jason with message 'Pokemon Mew already exists.'", () => {
      const expectedErrorMessage = {
        error: "Pokemon Mew already exists.",
      };

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
