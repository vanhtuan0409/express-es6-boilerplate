import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import healthcheck from "express-healthcheck";
import { sumController } from "./controller";
import { errorLogger, errorHandler } from "./controller/error_handling";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use("/health", healthcheck());

app.post("/sum", sumController);

app.use(errorLogger);
app.use(errorHandler);

const port = process.env.HTTP_PORT || 3000;
app.listen(port, function() {
  console.log(`Server running on :${port}`);
});
