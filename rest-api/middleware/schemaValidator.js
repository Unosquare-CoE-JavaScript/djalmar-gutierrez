const Joi = require('@hapi/joi');
const ErrorResponse = require('../constants/ErrorResponse');

const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            }
        });
        return errorDetails;
    }
    return null;
}

module.exports.validateBody = schema => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            const errorResponse = new ErrorResponse(error);
            return res.status(errorResponse.status).send(errorResponse);
        }
        return next();
    }
}
module.exports.validateQuery = schema => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.query, schema);
        if (error) {
            const errorResponse = new ErrorResponse(error);
            return res.status(errorResponse.status).send(errorResponse);
        }
        return next();
    }
}

