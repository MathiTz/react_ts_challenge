import * as express from "express";
import { create, getAll } from "../controller/Pizzas";

const router = express.Router();

// GET BACK ALL THE POSTS
router.get("/", getAll);

//SUBMITS A POST

router.post("/", create);

export default router;
