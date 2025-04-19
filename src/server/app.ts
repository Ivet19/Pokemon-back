import express from "express";
import morgan from "morgan";
import cors from "cors";
import { checkHealthStatus } from "./middlewares/checkHealthStatus.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";
import pokemonsRouter from "../pokemon/router/pokemonsRouter.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(morgan("dev"));

app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/pokemon", pokemonsRouter);

app.use(handleEndpointNotFound);

export default app;
