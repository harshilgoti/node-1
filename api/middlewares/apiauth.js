/**
 * API authentication middleware
 */
const { isEmpty } = require("lodash");
const jwt = require("jsonwebtoken");
const { userService } = require("../../service");

const { UNAUTHORIZED, INTERNAL_SERVER_ERROR } = require("../constants/errorMessages");

const apiAuth = async (req, res, next) => {
    const [code, message] = UNAUTHORIZED.split("::");
    const apiErrorResponse = {
        error: true,
        message: message || "",
        data: {}
    };
    try {
        let { authorization: token } = req.headers;
        if (token && token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);

            // const tokenFound = await getOneWhere({ token });
            const tokenData = jwt.verify(token, process.env.JWT_SECRET);
            if (!isEmpty(tokenData)) {
                let user = await userService.findOne({ id: tokenData.id });
                req.user = user;

                return next();
            } else {
                res.status(code).send(apiErrorResponse);
            }
        } else {
            res.status(code).send(apiErrorResponse);
        }
    } catch (err) {
        console.log('err', err)
        res.status(code).send(INTERNAL_SERVER_ERROR);
    }
};

module.exports = apiAuth;
