const { userService } = require("../../service");
const { ALREADY_EXIST } = require('../../api/constants/errorMessages')

class userController {

    async create(req, res, next) {

        try {
            const { body } = req
            const existUser = await userService.findOne({ email: body.email })
            if (existUser) throw new Error(ALREADY_EXIST)
            await userService.create(body)
            const updatedUser = await userService.findOne({ email: body.email })
            res.status(200).send(updatedUser)
        } catch (error) {
            next(error)
        }
    }

    /**
 * Update  user
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
    async update(req, res, next) {
        const model = req.body;
        const { user_id } = req.params;
        try {

            const user = await userService.findOne({ id: user_id });
            if (!user) throw new Error("User not found");
            await userService.update(user.id, model);

            let getUser = await userService.findOne({ id: user_id });
            return res.json({
                message: "",
                data: getUser
            });
        } catch (error) {
            return next(error);
        }
    }

    /**
  * Delete user 
  * @param req
  * @param res
  * @returns {Promise<*>}
  */
    async delete(req, res, next) {

        const { user_id } = req.params;

        try {
            const user = await userService.findOne({ id: user_id });

            if (!user) throw new Error('User not found');

            await userService.remove(user_id);

            return res.json({
                data: {}
            });
        } catch (error) {
            console.log("error", error);

            return next(error);
        }
    }
}

module.exports = new userController(); 