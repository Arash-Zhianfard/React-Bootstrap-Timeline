import * as React from "react";
import { useContext } from "react";
import { TimelineContext } from "./TimelineContext";
var Content = function (_a) {
    var isActive = _a.isActive, datetime = _a.datetime, title = _a.title, content = _a.content;
    var titleClass = isActive ? "success" : "muted";
    var borderClass = isActive ? "border-success shadow" : "";
    var timelineContext = useContext(TimelineContext);
    return (React.createElement("div", { className: "col " + timelineContext.PaddingY },
        React.createElement("div", { className: "card " + borderClass },
            React.createElement("div", { className: "card-body" },
                React.createElement("div", { className: "float-right text-" + titleClass }, datetime),
                React.createElement("h4", { className: "card-title text-" + titleClass }, title),
                React.createElement("p", { className: "card-text" }, content)))));
};
export default Content;
