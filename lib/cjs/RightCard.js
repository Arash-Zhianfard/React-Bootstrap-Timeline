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
var Bullet_1 = __importDefault(require("./Bullet"));
var Content_1 = __importDefault(require("./Content"));
var react_1 = __importStar(require("react"));
var Type_1 = require("./Type");
var TimelineContext_1 = require("./TimelineContext");
var CardWithCenterPipe = function (_a) {
    var datetime = _a.datetime, title = _a.title, content = _a.content, isActive = _a.isActive, bottomLine = _a.bottomLine, topLine = _a.topLine, alignment = _a.alignment;
    var timelineContext = react_1.useContext(TimelineContext_1.TimelineContext);
    return (react_1.default.createElement("div", { className: "row no-gutters" },
        alignment === Type_1.Alignment.Right && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "col-" + timelineContext.Size }),
            react_1.default.createElement(Bullet_1.default, { alignment: Type_1.Alignment.Right, isActive: isActive, bottomLine: bottomLine, topLine: topLine }))),
        react_1.default.createElement(Content_1.default, { datetime: datetime, title: title, content: content, isActive: isActive }),
        alignment === Type_1.Alignment.Left && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Bullet_1.default, { alignment: Type_1.Alignment.Right, isActive: isActive, bottomLine: bottomLine, topLine: topLine }),
            react_1.default.createElement("div", { className: "col-" + timelineContext.Size })))));
};
exports.default = CardWithCenterPipe;
