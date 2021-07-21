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
import CardWithLeftPipe from './CardWithLeftPipe';
var LeftPipeCardSorter = function (_a) {
    var Cards = _a.Cards;
    return (React.createElement(React.Fragment, null, Cards.map(function (cardDefinition, index) {
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
        return React.createElement(CardWithLeftPipe, __assign({}, cardProps, { key: index }));
    })));
};
export default LeftPipeCardSorter;
