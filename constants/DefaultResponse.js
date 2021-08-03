class DefaultResponse {

    constructor(body = {}, message = '', status = 200) {
        this.body = body;
        this.message = message;
        this.status = status;
    }
}

module.exports = DefaultResponse;