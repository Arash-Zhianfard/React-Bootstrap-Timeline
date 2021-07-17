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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var TimelineContext_1 = require("./TimelineContext");
var Content = function (_a) {
    var isActive = _a.isActive, datetime = _a.datetime, title = _a.title, content = _a.content;
    var titleClass = isActive ? "success" : "muted";
    var borderClass = isActive ? "border-success shadow" : "";
    var timelineContext = react_1.useContext(TimelineContext_1.TimelineContext);
    return (React.createElement("div", { className: "col " + timelineContext.PaddingY },
        React.createElement("div", { className: "card " + borderClass },
            React.createElement("div", { className: "card-body" },
                React.createElement("div", { className: "float-right text-" + titleClass }, datetime),
                React.createElement("h4", { className: "card-title text-" + titleClass }, title),
                React.createElement("p", { className: "card-text" }, content)))));
};
exports.default = Content;
