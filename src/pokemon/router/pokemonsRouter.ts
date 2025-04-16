import { Router } from "express";
import PokemonController from "../controller/PokemonController.js";
import { pokemons } from "../data/pokemon.js";

const pokemonsRouter = Router();

const pokemonController = new PokemonController(pokemons);

pokemonsRouter.get("/", pokemonController.getPokemons);

export default pokemonsRouter;
