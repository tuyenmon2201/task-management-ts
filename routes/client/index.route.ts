import { taskRoute } from "./task.route";
import { userRoute } from "./user.route";
import { Express } from "express";

export const routesApi = (app: Express) => {

    app.use("/tasks", taskRoute);

    app.use("/users", userRoute);

}