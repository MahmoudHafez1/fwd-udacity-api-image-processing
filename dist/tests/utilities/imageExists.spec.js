"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageExists_1 = __importDefault(require("../../utilities/imageExists"));
describe('test if image exists', function () {
    it('should be true when passing "fjord"', function () {
        expect((0, imageExists_1.default)('fjord')).toBeTrue();
    });
    it('should be false when passing "waterfall"', function () {
        expect((0, imageExists_1.default)('waterfall')).toBeFalse();
    });
});
