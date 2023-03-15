
const jwt = require("jsonwebtoken");
const { tokenModel } = require("../models");
const { LOGIN_FAILED } = require('../api/constants/errorMessages')

class tokenService {

    async createToken(model) {
        let jwtToken = "";
        try {
            jwtToken = jwt.sign(
                {
                    id: model.user_id,
                    email: model.email
                },
                process.env.JWT_SECRET
            );
        } catch (error) {
            throw new Error(LOGIN_FAILED);
        }

        model.token = jwtToken;
        await tokenModel.create(model);

        return jwtToken;
    }
}

module.exports = new tokenService();
