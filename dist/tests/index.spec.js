"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("test add func", () => {
    it("should add 2 + 5 and return 7", () => {
        expect((0, index_1.default)(2, 6)).toBe(7);
    });
});
