import { asyncSum } from "../api";

export async function sumController(req, res, next) {
  const { x, y } = req.body;
  const result = await asyncSum(x, y);
  res.json({ value: result });
}
