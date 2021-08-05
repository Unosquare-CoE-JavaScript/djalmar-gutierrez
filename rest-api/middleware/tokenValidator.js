const jwt = require('jsonwebtoken');

const constants = require('../constants');
const ErrorResponse = require('../constants/ErrorResponse');

module.exports.validateToken = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw new Error(constants.errorMessages.TOKEN_MISSING);
        }

        let token = req.headers.authorization.split('Bearer ')[1];

        let decoded = jwt.verify(token, process.env.SECRET_KEY || 'MYSECRETKEY');
        console.log(decoded);
        return next();

    } catch (err) {
        let errResponse = new ErrorResponse({}, err.message);
        console.log(errResponse);
        return res.status(errResponse.status).send(errResponse);
    }
};

