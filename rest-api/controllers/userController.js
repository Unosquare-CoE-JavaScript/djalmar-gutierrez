const contants = require('../constants');
const userService = require('../service/userService');
const CreatedResponse = require('../constants/CreatedResponse');
const constants = require('../constants');

module.exports.signup = async (req, res) => {
    let response = {};
    try {
        let user = await userService.signup(req.body);
        response = new CreatedResponse(user, constants.userMessages.USER_SIGNUP);
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}

module.exports.login = async (req, res) => {
    let response = {};
    try {
        let token = await userService.login(req.body);
        response = new CreatedResponse({ token }, constants.userMessages.USER_LOGIN);
    } catch (err) {
        response.status = 400;
        response.message = err.message;
    }
    return res.status(response.status).send(response);
}
