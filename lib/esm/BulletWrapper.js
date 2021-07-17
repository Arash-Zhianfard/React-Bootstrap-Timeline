import React from "react";
var BulletWrapper = function (_a) {
    var drawLine = _a.drawLine;
    var drawLineClass = drawLine ? "border-right" : "";
    return (React.createElement("div", { className: "row h-50" },
        React.createElement("div", { className: "col " + drawLineClass }, "\u00A0"),
        React.createElement("div", { className: "col" }, "\u00A0")));
};
export default BulletWrapper;
