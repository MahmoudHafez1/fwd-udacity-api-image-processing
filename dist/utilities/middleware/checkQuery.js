"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageExists_1 = __importDefault(require("../imageExists"));
var checkQuery = function (req, res, next) {
    var filename = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    var widthNum = Number(width);
    var heightNum = Number(height);
    if (!(0, imageExists_1.default)(filename))
        res.send('Image name is not correct');
    else if (isNaN(widthNum) || isNaN(heightNum))
        res.send('Dimensions are not correct');
    else {
        res.locals.imageName = filename;
        res.locals.width = widthNum;
        res.locals.height = heightNum;
        next();
    }
};
exports.default = checkQuery;
