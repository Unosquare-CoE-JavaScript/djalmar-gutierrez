const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../database/models/userModel');
const constants = require('../constants');
const { formatMongoData } = require('../helpers/dbHelper');

module.exports.signup = async ({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new Error(constants.userMessages.USER_EXISTS_ERROR);
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({ email, password });

        let result = await newUser.save();
        return formatMongoData(result);

    } catch (err) {
        throw new Error(err);
    }
}

module.exports.login = async ({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (!user) {
            throw new Error(constants.userMessages.USER_NOT_FOUND);
        }
        let isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error(constants.userMessages.INVALID_PASSWORD);
        }

        let token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY || 'MYSECRETKEY',
            { expiresIn: '1d' });
        return token;

    } catch (err) {
        throw new Error(err);
    }
}