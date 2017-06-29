export function errorLogger(err, req, res, next) {
  console.error(`[ERROR] ${err.message}`);
  next(err);
}

export function errorHandler(err, req, res, next) {
  const httpStatus = err.code || 500;
  res.status(httpStatus);
  res.json({ error: err.message });
}
