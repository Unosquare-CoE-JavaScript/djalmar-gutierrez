const DefaultResponse = require('./DefaultResponse');
const constants = require('./index');


class CreatedResponse extends DefaultResponse {
    constructor(body, message = constants.productMessages.PRODUCT_UPDATED) {
        super(body, message, 200);
    }
}

module.exports = CreatedResponse;