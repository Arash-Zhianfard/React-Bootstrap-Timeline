"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineContext = exports.setting = void 0;
var react_1 = __importDefault(require("react"));
var Type_1 = require("./Type");
exports.setting = {
    Alignment: Type_1.TimelineAlignment.Left,
    PaddingY: Type_1.BsPaddingY.Two,
    Size: Type_1.BsSize.Small,
};
exports.TimelineContext = react_1.default.createContext(exports.setting // default value
);
