"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 4000 || process.env.port;
const db_url = "mongodb://127.0.0.1/local" || process.env.DB_URL;
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
// Import Routes
const pizzas_1 = require("./routes/pizzas");
app.use("/", pizzas_1.default);
// ROUTES
// app.get("/", (req: Request, res: Response) => {
//   res.send("We are on home");
// });
// Connect To DB
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to DB!");
}).then(() => {
    // Listen to server
    app.listen(port, () => {
        console.log(`App start on ${port}`);
    });
}).catch(e => console.log(e));
//# sourceMappingURL=app.js.map