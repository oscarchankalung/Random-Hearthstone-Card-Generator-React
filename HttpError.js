function HttpError(response, message, body) {
  var instance = new Error(response, message);
  instance.name = 'HttpError';
  instance.response = response;
  instance.message = message;
  instance.body = body;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, HttpError);
  }
  return instance;
}

HttpError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

export default HttpError;