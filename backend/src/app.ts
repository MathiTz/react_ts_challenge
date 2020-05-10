import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";

const port = 4000 || process.env.port;
const db_url = "mongodb://127.0.0.1/local" || process.env.DB_URL;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Import Routes
import pizzaRoute from "./routes/pizzas";

app.use("/", pizzaRoute);

// ROUTES

// app.get("/", (req: Request, res: Response) => {
//   res.send("We are on home");
// });

// Connect To DB
mongoose.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
).then(() => {
  // Listen to server
  app.listen(port, () => {
    console.log(`App start on ${port}`);
  });
}).catch(e => console.log(e))


