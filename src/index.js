import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { sumController } from "./controller";
import { errorLogger, errorHandler } from "./controller/error_handling";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(errorLogger);
app.use(errorHandler);

app.get("/sum", sumController);

const port = process.env.HTTP_PORT || 3000;
app.listen(port, function() {
  console.log(`Server running on :${port}`);
});
