export function errorLogger(err, req, res, next) {
  console.error(`[ERROR] ${err.message}`);
  next(err);
}

export function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({ error: err.message });
}
