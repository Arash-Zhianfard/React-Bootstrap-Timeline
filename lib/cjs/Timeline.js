"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
var react_1 = __importStar(require("react"));
var CenterPipeCardSorter_1 = __importDefault(require("./CenterPipeCardSorter"));
var LeftPipeCardSorter_1 = __importDefault(require("./LeftPipeCardSorter"));
var TimelineContext_1 = require("./TimelineContext");
var Timeline = function (_a) {
    var cards = _a.cards, setting = _a.setting, children = _a.children;
    var timelineContext = react_1.useContext(TimelineContext_1.TimelineContext);
    var _b = react_1.default.useState([]), cardElement = _b[0], setcardElement = _b[1];
    react_1.useEffect(function () {
        if (setting) {
            var userDefinedSetting = __assign({}, setting);
            if (userDefinedSetting.Size)
                timelineContext.Size = userDefinedSetting.Size;
            if (userDefinedSetting.Alignment)
                timelineContext.Alignment = userDefinedSetting.Alignment;
            if (userDefinedSetting.PaddingY)
                timelineContext.PaddingY = userDefinedSetting.PaddingY;
        }
        if (cards)
            setcardElement(function (cardElement) { return __spreadArray(__spreadArray([], cardElement), cards); });
        react_1.default.Children.forEach(children, function (element) {
            if (!react_1.default.isValidElement(element))
                return;
            setcardElement(function (cardElement) { return __spreadArray(__spreadArray([], cardElement), [element.props]); });
        });
    }, []);
    var cardSorter = null;
    if (timelineContext.Alignment === Type_1.TimelineAlignment.Center) {
        cardSorter = react_1.default.createElement(CenterPipeCardSorter_1.default, { Cards: cardElement });
    }
    else {
        cardSorter = react_1.default.createElement(LeftPipeCardSorter_1.default, { Cards: cardElement });
    }
    return (react_1.default.createElement("div", { className: "container " + timelineContext.PaddingY }, cardSorter));
};
exports.default = Timeline;
