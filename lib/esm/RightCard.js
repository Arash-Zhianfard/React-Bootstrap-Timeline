import Bullet from "./Bullet";
import Content from "./Content";
import React, { useContext } from "react";
import { Alignment } from "./Type";
import { TimelineContext } from "./TimelineContext";
var CardWithCenterPipe = function (_a) {
    var datetime = _a.datetime, title = _a.title, content = _a.content, isActive = _a.isActive, bottomLine = _a.bottomLine, topLine = _a.topLine, alignment = _a.alignment;
    var timelineContext = useContext(TimelineContext);
    return (React.createElement("div", { className: "row no-gutters" },
        alignment === Alignment.Right && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "col-" + timelineContext.Size }),
            React.createElement(Bullet, { alignment: Alignment.Right, isActive: isActive, bottomLine: bottomLine, topLine: topLine }))),
        React.createElement(Content, { datetime: datetime, title: title, content: content, isActive: isActive }),
        alignment === Alignment.Left && (React.createElement(React.Fragment, null,
            React.createElement(Bullet, { alignment: Alignment.Right, isActive: isActive, bottomLine: bottomLine, topLine: topLine }),
            React.createElement("div", { className: "col-" + timelineContext.Size })))));
};
export default CardWithCenterPipe;
