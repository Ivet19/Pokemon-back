import { Request, Response } from "express";
import { eevee, jigglypuff, mew } from "../../data/fixtures.js";
import Pokemon from "../../Pokemon.js";
import PokemonController from "../PokemonController.js";

describe("Given the deletePokemon function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let pokemons: Pokemon[];
  let pokemonController: PokemonController;

  beforeEach(() => {
    pokemons = [eevee, mew];
    pokemonController = new PokemonController(pokemons);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Eevee's id that already exists", () => {
    const req = {
      params: { pokemonId: eevee.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call the received response's method json with a pokemon named 'Eevee'", () => {
      const { name } = eevee;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name }));
    });

    test("Then Eevee should not be in the pokemons array", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(pokemons).not.toContain(eevee);
    });
  });

  describe("When it receives a request with Jigglypuff id and the pokemon doesn't exist", () => {
    const req = {
      params: { monumentId: jigglypuff.id },
    } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Then it should call the received response's method json with a 'Pokemon not found' error", () => {
      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({
        error: "Pokemon not found",
      });
    });
  });
});
