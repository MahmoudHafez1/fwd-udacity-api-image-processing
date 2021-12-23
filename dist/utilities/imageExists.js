"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imageExists = function (imageName) {
    var imagePath = path_1.default.join(__dirname, '..', '..', 'public', 'images', 'full', "".concat(imageName, ".jpg"));
    return fs_1.default.existsSync(imagePath);
};
exports.default = imageExists;
