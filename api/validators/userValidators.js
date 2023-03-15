const Joi = require("joi");
const errorMessages = require("../constants/errorMessages");


exports.create = Joi.object().keys({
    first_name: Joi.string().error(new Error(errorMessages.NAME)),
    last_name: Joi.string().error(new Error(errorMessages.NAME)),
    phone: Joi.string().error(new Error(errorMessages.PHONE)),
    email: Joi.string().error(new Error(errorMessages.EMAIL)),
})

exports.update = Joi.object().keys({
    first_name: Joi.string().error(new Error(errorMessages.NAME)),
    last_name: Joi.string().error(new Error(errorMessages.NAME)),
    phone: Joi.string().error(new Error(errorMessages.PHONE)),
    email: Joi.string().error(new Error(errorMessages.EMAIL))
})

