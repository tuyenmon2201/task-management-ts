import { taskRoute } from "./task.route";
import { userRoute } from "./user.route";
import { Express } from "express";

import { requireAuth } from "../../middlewares/client/authMiddleware";

export const routesApi = (app: Express) => {

    app.use("/tasks", requireAuth, taskRoute);

    app.use("/users", userRoute);

}