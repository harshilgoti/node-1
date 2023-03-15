const { userModel } = require("../models");
const { mongoId } = require('../helper/commonFunction')

class userService {

    async findOne(where) {
        return userModel.findOne(where);
    }

    async create(body) {
        console.log('body', body)
        body.id = mongoId('user')
        return userModel.create(body);
    }

    async update(id, model) {
        return userModel.update({ id: id }, model);
    }

    async remove(id) {
        return userModel.remove({ id: id });
    }


}

module.exports = new userService();