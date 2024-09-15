"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bodyParser = require("body-parser");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const database_1 = require("./config/database");
(0, database_1.connectDatabase)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3003;
const index_route_1 = require("./routes/client/index.route");
app.use(bodyParser.json());
(0, index_route_1.routesApi)(app);
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
