export function errorLogger(err, req, res, next) {
  console.error(err);
  next(err);
}

export function errorHandler(err, req, res) {
  res.status(500);
  res.json({
    error: err
  });
}
