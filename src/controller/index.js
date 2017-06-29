import { asyncSum } from "../api";
import Ajv from "ajv";

const sumRequestSchema = {
  type: "object",
  properties: {
    x: { type: "number" },
    y: { type: "number" }
  },
  required: ["x", "y"]
};

export async function sumController(req, res, next) {
  const validator = new Ajv();
  if (!validator.validate(sumRequestSchema, req.body)) {
    const error = new Error("Sum request is not valid");
    error.status = 400;
    next(error);
    return;
  }

  const { x, y } = req.body;
  const result = await asyncSum(x, y);
  res.json({ value: result });
}
