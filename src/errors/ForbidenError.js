const HttpError = require('./HttpError');

class ForbiddenError extends HttpError {
  constructor(message) {
    super(message, 403);
    this.name = 'NotFoundError';
  }
}

module.exports = ForbiddenError;