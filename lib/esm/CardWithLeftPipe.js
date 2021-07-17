import React from "react";
import Bullet from "./Bullet";
import Content from "./Content";
import { Alignment } from "./Type";
var CardWithLeftPipe = function (_a) {
    var datetime = _a.datetime, title = _a.title, content = _a.content, isActive = _a.isActive, bottomLine = _a.bottomLine, topLine = _a.topLine;
    return (React.createElement("div", { className: "row" },
        React.createElement(Bullet, { alignment: Alignment.Left, isActive: isActive, bottomLine: bottomLine, topLine: topLine }),
        React.createElement(Content, { datetime: datetime, title: title, content: content, isActive: isActive })));
};
export default CardWithLeftPipe;
