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
        var cardProps;
        if (index === 0) {
            cardProps = __assign(__assign({}, cardDefinition), { bottomLine: true, topLine: false });
        }
        else if (index === Cards.length - 1) {
            cardProps = __assign(__assign({}, cardDefinition), { bottomLine: false, topLine: true });
        }
        else {
            cardProps = __assign(__assign({}, cardDefinition), { bottomLine: true, topLine: true });
        }
        return react_1.default.createElement(CardWithLeftPipe_1.default, __assign({}, cardProps, { key: index }));
    })));
};
exports.default = LeftPipeCardSorter;
