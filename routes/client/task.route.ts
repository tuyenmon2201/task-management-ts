import express from "express";
const router = express.Router();
import * as controller from "../../controllers/client/task.controller";

router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.patch("/change-status", controller.changeStatus);

export const taskRoute = router;