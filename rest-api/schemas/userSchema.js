const Joi = require('@hapi/joi');

module.exports.signupSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
module.exports.loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
