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
import React from 'react';
import CardWithCenterPipe from './CardWithCenterPipe';
import { Alignment } from './Type';
var CenterPipeCardSorter = function (_a) {
    var Cards = _a.Cards;
    return (React.createElement(React.Fragment, null, Cards.map(function (card, index) {
        var alignment = index % 2 ? Alignment.Left : Alignment.Right;
        var cardProps;
        if (index === 0) {
            cardProps = __assign(__assign({}, card), { bottomLine: true, topLine: false, alignment: alignment });
        }
        else if (index === Cards.length - 1) {
            cardProps = __assign(__assign({}, card), { bottomLine: false, topLine: true, alignment: alignment });
        }
        else {
            cardProps = __assign(__assign({}, card), { bottomLine: true, topLine: true, alignment: alignment });
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(CardWithCenterPipe, __assign({}, cardProps, { key: index }))));
    })));
};
export default CenterPipeCardSorter;
