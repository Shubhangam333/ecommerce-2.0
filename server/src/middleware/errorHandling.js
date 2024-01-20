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

  if (err.name === "ValidationError") {
    message = "Please fill all the required details";
  }

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    message = `Resource not found. Invalid: ${err.path}`;
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
  }

  // Wrong JWT error

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    message = `Json Web Token is Expired, Try again `;
  }

  let stackTrace = undefined;

  if (process.env.NODE_ENV !== "production") {
    stackTrace = err.stack;
  }
  res.status(httpStatusCode).json({
    message: message,
    timestamp: err.timestamp || undefined,
    documentationUrl: err.documentationUrl || undefined,
    stackTrace: stackTrace,
  });
}

export default errorHandler;
