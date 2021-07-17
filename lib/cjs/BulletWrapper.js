"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BulletWrapper = function (_a) {
    var drawLine = _a.drawLine;
    var drawLineClass = drawLine ? "border-right" : "";
    return (react_1.default.createElement("div", { className: "row h-50" },
        react_1.default.createElement("div", { className: "col " + drawLineClass }, "\u00A0"),
        react_1.default.createElement("div", { className: "col" }, "\u00A0")));
};
exports.default = BulletWrapper;
