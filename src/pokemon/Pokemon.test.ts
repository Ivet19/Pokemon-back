import { eevee } from "./data/fixtures.js";

describe("Given the Eevee pokémon", () => {
  describe("When it is instanciated", () => {
    test("Then it should be named 'Eevee'", () => {
      const expectedName = "Eevee";

      const actualName = eevee.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should have the 133 pokedex position", () => {
      const expectedPosition = "133";

      const actualPosition = eevee.pokedexPosition;

      expect(actualPosition).toBe(expectedPosition);
    });
  });
});
