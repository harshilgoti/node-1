const Joi = require("joi");
const errorMessages = require("../constants/errorMessages");

exports.login = Joi.object().keys({
    email: Joi.string().required().error(new Error(errorMessages.EMAIL)),
    password: Joi.string().required().error(new Error(errorMessages.PASSWORD)),
})

