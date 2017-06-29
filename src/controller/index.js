import { asyncSum } from "../api";
import Ajv from "ajv";
import ResponseError from "../util/error";

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
    next(ResponseError.BadRequest("Sum request is not valid"));
    return;
  }

  const { x, y } = req.body;
  const result = await asyncSum(x, y);
  res.json({ value: result });
}
