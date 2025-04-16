import { PokemonStructure } from "./types.js";
import { v4 as uuidv4 } from "uuid";

class Pokemon implements PokemonStructure {
  public id: string;
  public isCaptured: boolean;

  constructor(
    public name: string,
    public pokedexPosition: string,
    public imageUrl: string,
  ) {
    this.id = uuidv4();
    this.isCaptured = false;
  }
}

export default Pokemon;
