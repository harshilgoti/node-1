const { userService, tokenService } = require("../../service");
const { USER_NOT_FOUND } = require('../../api/constants/errorMessages')

class authController {

    async login(req, res, next) {
        try {
            const { email } = req.body
            const user = await userService.findOne({ email });
            const token = await tokenService.createToken({ user_id: user.id, email: user.email });
            if (!user) throw new Error(USER_NOT_FOUND);
            res.status(200).send({ user, token })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new authController();