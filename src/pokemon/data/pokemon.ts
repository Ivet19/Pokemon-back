import Pokemon from "../Pokemon.js";
import { PokemonStructure } from "../types.js";

const bulbasaur = new Pokemon(
  "Bulbasaur",
  "1",
  "https://i.ibb.co/JWRqWHfk/bulbasaur.webp",
);

const ivysaur = new Pokemon(
  "Ivysaur",
  "2",
  "https://i.ibb.co/BVsJ5z1r/ivysaur.webp",
);

const venusaur = new Pokemon(
  "Venusaur",
  "3",
  "https://i.ibb.co/MkRZDStj/venasaur.webp",
);

const charmander = new Pokemon(
  "Charmander",
  "4",
  "https://i.ibb.co/1thcT08j/charmander.webp",
);

const charmeleon = new Pokemon(
  "Charmeleon",
  "5",
  "https://i.ibb.co/gM3f4Qrm/charmeleon.webp",
);

const charizard = new Pokemon(
  "Charizard",
  "6",
  "https://i.ibb.co/HD8b7s7S/charizard.webp",
);

const squirtle = new Pokemon(
  "Squirtle",
  "7",
  "https://i.ibb.co/RpN0X6vx/squirtle.webp",
);

const wartortle = new Pokemon(
  "Wartortle",
  "8",
  "https://i.ibb.co/xSsFdLXB/wartortle.webp",
);

const blastoise = new Pokemon(
  "Blastoise",
  "9",
  "https://i.ibb.co/7NRQ2rh0/blastoise.webp",
);

const pikachu = new Pokemon(
  "Pikachu",
  "25",
  "https://i.ibb.co/sdTrWpFz/pikachu.webp",
);

const raichu = new Pokemon(
  "Raichu",
  "26",
  "https://i.ibb.co/spzXt6J9/raichu.webp",
);

export const pokemons: PokemonStructure[] = [
  bulbasaur,
  ivysaur,
  venusaur,
  charmander,
  charmeleon,
  charizard,
  squirtle,
  wartortle,
  blastoise,
  pikachu,
  raichu,
];
