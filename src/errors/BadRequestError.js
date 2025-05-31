const HttpError = require('./HttpError');

class BadRequest extends HttpError {
    constructor(message) {
        super(message, 400);
        this.name = 'BadRequest';
    }
}

module.exports = BadRequest;