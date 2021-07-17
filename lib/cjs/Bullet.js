"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BulletWrapper_1 = __importDefault(require("./BulletWrapper"));
var Type_1 = require("./Type");
var react_1 = __importStar(require("react"));
var TimelineContext_1 = require("./TimelineContext");
var Bullet = function (_a) {
    var isActive = _a.isActive, alignment = _a.alignment, topLine = _a.topLine, bottomLine = _a.bottomLine;
    var timelineContext = react_1.useContext(TimelineContext_1.TimelineContext);
    var typeClass = isActive ? "success" : "light border";
    var alignClass = alignment === Type_1.Alignment.Right ? "col-" + timelineContext.Size + "-1" : "col-auto";
    var bottomWrapper = bottomLine ? (react_1.default.createElement(BulletWrapper_1.default, { drawLine: true })) : (react_1.default.createElement(BulletWrapper_1.default, { drawLine: false }));
    var topWrapper = topLine ? (react_1.default.createElement(BulletWrapper_1.default, { drawLine: true })) : (react_1.default.createElement(BulletWrapper_1.default, { drawLine: false }));
    return (react_1.default.createElement("div", { className: alignClass + " text-center flex-column d-none d-" + timelineContext.Size + "-flex" },
        topWrapper,
        react_1.default.createElement("h5", { className: "m-2" },
            react_1.default.createElement("span", { className: "badge badge-pill bg-" + typeClass }, "\u00A0")),
        bottomWrapper));
};
exports.default = Bullet;
