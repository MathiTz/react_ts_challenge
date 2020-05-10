"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../../models/Pizza");
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pizzas = yield Pizza_1.default.find();
            res.json(pizzas);
        }
        catch (err) {
            res.json({ message: err });
        }
    });
}
exports.default = getAll;
//# sourceMappingURL=getAll.js.map