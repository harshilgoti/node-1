exports.userRoutes = [
    {
        method: "POST",
        path: "/user",
        handler: "userController.create",
        authenticate: true,
    },
    {
        method: "PUT",
        path: "/user/:user_id",
        handler: "userController.update",
        authenticate: true,
    },
    {
        method: "DELETE",
        path: "/user/:user_id",
        handler: "userController.delete",
        authenticate: true,
    },
];