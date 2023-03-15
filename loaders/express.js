//express loader
const { router } = require('../api/routes')
const cors = require("cors");
const bodyParser = require('body-parser');

module.exports = async (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(router);
    app.use(require("./errorHandler"));
};