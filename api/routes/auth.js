exports.authRoutes = [
    // Auth Users
    {
        method: "POST",
        path: "/login",
        handler: "authController.login",
    },
    // {
    //     method: "GET",
    //     path: "/user-profile",
    //     handler: "AuthController.getMyDetail",
    //     authenticate: true,
    // },
    // {
    //     method: "GET",
    //     path: "/logout",
    //     handler: "AuthController.logout",
    //     authenticate: true,
    // },
];