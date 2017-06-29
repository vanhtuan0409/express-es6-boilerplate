import { resolveAfter2s } from "../api";

export async function sumController(req, res, next) {
  const value1 = await resolveAfter2s(20);
  const value2 = await resolveAfter2s(30);
  res.json({
    value: 10 + value1 + value2
  });
}
