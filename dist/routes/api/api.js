"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageExists_1 = __importDefault(require("../../utilities/imageExists"));
const api = express_1.default.Router();
api.get('/', (req, res) => {
    console.log((0, imageExists_1.default)('fjord'));
    res.send("hof");
});
exports.default = api;
