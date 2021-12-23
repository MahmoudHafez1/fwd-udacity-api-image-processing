"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var checkResizedImage = function (req, res, next) {
    var _a = res.locals, imageName = _a.imageName, width = _a.width, height = _a.height;
    var resizedImageName = "".concat(imageName, "_").concat(width, "_").concat(height, ".jpg");
    var imagePath = path_1.default.join(__dirname, '..', '..', '..', 'public', 'images', 'resized', "".concat(resizedImageName));
    if (fs_1.default.existsSync(imagePath)) {
        res.send("<img src=\"/images/resized/".concat(resizedImageName, "\" />"));
    }
    else {
        next();
    }
};
exports.default = checkResizedImage;
