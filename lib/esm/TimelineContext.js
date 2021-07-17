import React from "react";
import { BsPaddingY, BsSize, TimelineAlignment } from "./Type";
export var setting = {
    Alignment: TimelineAlignment.Left,
    PaddingY: BsPaddingY.Two,
    Size: BsSize.Small,
};
export var TimelineContext = React.createContext(setting // default value
);
