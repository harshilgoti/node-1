const Joi = require("joi");
const errorMessages = require("../constants/errorMessages");


exports.createTask = Joi.object().keys({
    name: Joi.string().error(new Error(errorMessages.NAME)),
    user_id: Joi.number().integer()

})
exports.updateTask = Joi.object().keys({
    name: Joi.string().error(new Error(errorMessages.NAME)),
    user_id: Joi.number().integer()

})