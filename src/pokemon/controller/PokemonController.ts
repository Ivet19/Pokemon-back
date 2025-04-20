import { Request, Response } from "express";
import { PokemonControllerStructure } from "./types.js";
import { PokemonStructure } from "../types.js";
import Pokemon from "../Pokemon.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  public addPokemon = (req: Request, res: Response): void => {
    const pokemonData = req.body as PokemonStructure;

    const newPokemon = new Pokemon(
      pokemonData.name,
      pokemonData.pokedexPosition,
      pokemonData.imageUrl,
    );

    if (this.pokemons.some((pokemon) => pokemon.name === newPokemon.name)) {
      res.status(409).json({
        error: `Pokemon ${pokemonData.name} already exists.`,
      });
      return;
    }

    this.pokemons.push(newPokemon);

    res.status(201).json(newPokemon);
  };
}

export default PokemonController;
