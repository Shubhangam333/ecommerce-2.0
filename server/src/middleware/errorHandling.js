// src/middlewares/errorHandling.js
import CustomError from "../errors/CustomError.js";

function errorHandler(err, req, res, next) {
  let httpStatusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof CustomError) {
    httpStatusCode = err.httpStatusCode;
    message = err.message;
  } else {
    if (process.env.NODE_ENV !== "production") {
      if (typeof err === "string") {
        message = err;
      } else if (err instanceof Error) {
        message = err.message;
      }
    }
  }

  let stackTrace = undefined;

  if (process.env.NODE_ENV !== "production") {
    stackTrace = err.stack;
  }
  res.status(httpStatusCode).send({
    error: {
      message: message,
      timestamp: err.timestamp || undefined,
      documentationUrl: err.documentationUrl || undefined,
      stackTrace: stackTrace,
    },
  });

  return next(err);
}

export default errorHandler;
