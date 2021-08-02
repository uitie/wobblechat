const globalErrorHandler = (error, _req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || "An unknown error occured";
  res.status(status).send(message);
};

module.exports = globalErrorHandler;
