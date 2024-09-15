"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesApi = void 0;
const task_route_1 = require("./task.route");
const user_route_1 = require("./user.route");
const authMiddleware_1 = require("../../middlewares/client/authMiddleware");
const routesApi = (app) => {
    app.use("/tasks", authMiddleware_1.requireAuth, task_route_1.taskRoute);
    app.use("/users", user_route_1.userRoute);
};
exports.routesApi = routesApi;
