import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  rootDir: "src",
  resolver: "ts-jest-resolver",
  verbose: true,
  ...createDefaultPreset(),
};

export default config;
