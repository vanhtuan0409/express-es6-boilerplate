import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello world");
});

const port = process.env.HTTP_PORT || 3000;
app.listen(port, function() {
  console.log(`Server running on :${port}`);
});
