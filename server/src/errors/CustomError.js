class CustomError extends Error {
  httpStatusCode;
  timestamp;
  documentationUrl;

  constructor(httpStatusCode, message, documentationUrl) {
    if (message) {
      super(message);
    } else {
      super("A generic error occurred!");
    }

    // initializing the class properties
    this.httpStatusCode = httpStatusCode;
    this.timestamp = new Date().toISOString();
    this.documentationUrl = documentationUrl;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
