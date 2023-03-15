const express = require("express");
const router = express.Router();
const authRoute = require("./auth");
const userRoute = require("./user");
const controller = require("../controllers");
const { validation, apiAuth } = require("../middlewares");

const routes = [
    ...authRoute.authRoutes,
    ...userRoute.userRoutes
];

// Applying routes
routes.forEach((route) => {
    let middleware = [(req, res, next) => next()];
    let validationMiddleware = (req, res, next) => {
        validation.validate(req.body, handler);
        next();
    };

    if (route.authenticate) {
        middleware.push(apiAuth);
    }

    if (!["get", "delete"].includes(route.method.toLowerCase())) {
        middleware.push(validationMiddleware);
    }

    const handler = route.handler.split(".");

    router[route.method.toLowerCase()](
        route.path,
        ...middleware,
        controller[handler[0]][handler[1]]
    );
    // ex. router.get('/hello', middleware, controller.DefaultController.hello)
});

exports.router = router;