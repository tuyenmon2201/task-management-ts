import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
dotenv.config();

import { connectDatabase } from "./config/database";
connectDatabase();

const app: Express = express();
const port: number | string = process.env.PORT || 3003;

import { routesApi } from "./routes/client/index.route";

app.use(bodyParser.json());

routesApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})