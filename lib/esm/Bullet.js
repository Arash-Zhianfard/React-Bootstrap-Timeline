import BulletWrapper from "./BulletWrapper";
import { Alignment } from "./Type";
import React, { useContext } from "react";
import { TimelineContext } from "./TimelineContext";
var Bullet = function (_a) {
    var isActive = _a.isActive, alignment = _a.alignment, topLine = _a.topLine, bottomLine = _a.bottomLine;
    var timelineContext = useContext(TimelineContext);
    var typeClass = isActive ? "success" : "light border";
    var alignClass = alignment === Alignment.Right ? "col-" + timelineContext.Size + "-1" : "col-auto";
    var bottomWrapper = bottomLine ? (React.createElement(BulletWrapper, { drawLine: true })) : (React.createElement(BulletWrapper, { drawLine: false }));
    var topWrapper = topLine ? (React.createElement(BulletWrapper, { drawLine: true })) : (React.createElement(BulletWrapper, { drawLine: false }));
    return (React.createElement("div", { className: alignClass + " text-center flex-column d-none d-" + timelineContext.Size + "-flex" },
        topWrapper,
        React.createElement("h5", { className: "m-2" },
            React.createElement("span", { className: "badge badge-pill bg-" + typeClass }, "\u00A0")),
        bottomWrapper));
};
export default Bullet;
