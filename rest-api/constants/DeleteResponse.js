const DefaultResponse = require('./DefaultResponse');
const constants = require('./index');


class DeleteResponse extends DefaultResponse {
    constructor() {
        super({}, constants.productMessages.PRODUCT_DELETED, 200);
    }
}

module.exports = DeleteResponse;