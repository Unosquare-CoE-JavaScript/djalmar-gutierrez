const DefaultResponse = require('./DefaultResponse');
const constants = require('./index');


class ErrorResponse extends DefaultResponse {
    constructor(body, message = constants.productMessages.PRODUCT_NOT_CREATED) {
        super(body, message, 400);
    }
}

module.exports = ErrorResponse;