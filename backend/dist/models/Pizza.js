"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoogse = require("mongoose");
const PizzaSchema = mongoogse.Schema({
    size: {
        type: String,
        required: true,
    },
    crust: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    toppings: {
        type: Array,
        required: true,
    },
});
const Pizza = mongoogse.model("Pizza", PizzaSchema);
exports.default = Pizza;
//# sourceMappingURL=Pizza.js.map