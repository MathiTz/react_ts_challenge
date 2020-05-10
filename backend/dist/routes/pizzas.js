"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Pizzas_1 = require("../controller/Pizzas");
const router = express.Router();
// GET BACK ALL THE POSTS
router.get("/", Pizzas_1.getAll);
//SUBMITS A POST
router.post("/", Pizzas_1.create);
exports.default = router;
//# sourceMappingURL=pizzas.js.map