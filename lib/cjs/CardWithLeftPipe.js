"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Bullet_1 = __importDefault(require("./Bullet"));
var Content_1 = __importDefault(require("./Content"));
var Type_1 = require("./Type");
var CardWithLeftPipe = function (_a) {
    var datetime = _a.datetime, title = _a.title, content = _a.content, isActive = _a.isActive, bottomLine = _a.bottomLine, topLine = _a.topLine;
    return (react_1.default.createElement("div", { className: "row" },
        react_1.default.createElement(Bullet_1.default, { alignment: Type_1.Alignment.Left, isActive: isActive, bottomLine: bottomLine, topLine: topLine }),
        react_1.default.createElement(Content_1.default, { datetime: datetime, title: title, content: content, isActive: isActive })));
};
exports.default = CardWithLeftPipe;
