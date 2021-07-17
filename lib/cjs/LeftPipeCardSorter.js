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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardWithLeftPipe_1 = __importDefault(require("./CardWithLeftPipe"));
var LeftPipeCardSorter = function (_a) {
    var Cards = _a.Cards;
    return (react_1.default.createElement(react_1.default.Fragment, null, Cards.map(function (cardDefinition, index) {
        if (index === 0) {
            var cardProps = __assign(__assign({}, cardDefinition), { bottomLine: true, topLine: false });
            return react_1.default.createElement(CardWithLeftPipe_1.default, __assign({}, cardProps));
        }
        else if (index === Cards.length - 1) {
            var cardProps = __assign(__assign({}, cardDefinition), { bottomLine: false, topLine: true });
            return react_1.default.createElement(CardWithLeftPipe_1.default, __assign({}, cardProps));
        }
        else {
            var cardProps = __assign(__assign({}, cardDefinition), { bottomLine: true, topLine: true });
            return react_1.default.createElement(CardWithLeftPipe_1.default, __assign({}, cardProps));
        }
    })));
};
exports.default = LeftPipeCardSorter;
