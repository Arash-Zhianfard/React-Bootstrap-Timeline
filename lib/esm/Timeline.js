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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { TimelineAlignment } from "./Type";
import React, { useContext, useEffect } from "react";
import CenterPipeCardSorter from "./CenterPipeCardSorter";
import LeftPipeCardSorter from "./LeftPipeCardSorter";
import { TimelineContext } from "./TimelineContext";
var Timeline = function (_a) {
    var cards = _a.cards, setting = _a.setting, children = _a.children;
    var timelineContext = useContext(TimelineContext);
    var _b = React.useState([]), cardElement = _b[0], setCardElement = _b[1];
    useEffect(function () {
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
            setCardElement(function (cardElement) { return __spreadArray(__spreadArray([], cardElement), cards); });
        React.Children.forEach(children, function (element) {
            if (!React.isValidElement(element))
                return;
            setCardElement(function (cardElement) { return __spreadArray(__spreadArray([], cardElement), [element.props]); });
        });
    }, []);
    var cardSorter = null;
    if (timelineContext.Alignment === TimelineAlignment.Center) {
        cardSorter = React.createElement(CenterPipeCardSorter, { Cards: cardElement });
    }
    else {
        cardSorter = React.createElement(LeftPipeCardSorter, { Cards: cardElement });
    }
    return (React.createElement("div", { className: "container " + timelineContext.PaddingY }, cardSorter));
};
export default Timeline;
