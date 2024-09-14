import { taskRoute } from "./task.route";
import { Express } from "express";



export const routesApi = (app: Express) => {

    app.use("/tasks", taskRoute);

}