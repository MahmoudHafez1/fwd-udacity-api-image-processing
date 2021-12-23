"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageExists_1 = __importDefault(require("../../utilities/imageExists"));
describe('test if image exists', () => {
    it('should be true when passing "fjord"', () => {
        expect((0, imageExists_1.default)('fjord')).toBeTrue;
    });
    it('should be false when passing "waterfall"', () => {
        expect((0, imageExists_1.default)('waterfall')).toBeFalse;
    });
});
