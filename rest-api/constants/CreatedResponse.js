const DefaultResponse = require('./DefaultResponse');
const constants = require('./index');


class CreatedResponse extends DefaultResponse {
    constructor(body, message = constants.productMessages.PRODUCT_CREATED) {
        super(body, message, 201);
    }
}

module.exports = CreatedResponse;