const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const schemaValidator = require('../middleware/schemaValidator');
const userSchema = require('../schemas/userSchema');

router.post('/signup', schemaValidator.validateBody(userSchema.signupSchema), userController.signup)


router.post('/login', schemaValidator.validateBody(userSchema.loginSchema), userController.login)
module.exports = router;