import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDatabase } from "./config/database";
connectDatabase();

const app: Express = express();
const port: number | string = process.env.PORT || 3003;

import { routesApi } from "./routes/client/index.route";

routesApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})