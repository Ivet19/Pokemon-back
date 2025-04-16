import express from "express";
import morgan from "morgan";
import { checkHealthStatus } from "./middlewares/checkHealthStatus.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", checkHealthStatus);

app.use(handleEndpointNotFound);

export default app;
