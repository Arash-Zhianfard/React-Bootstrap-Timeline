import React from "react";
import { BsPaddingY, BsSize, TimelineAlignment } from "./Type";

export const setting = {
  Alignment: TimelineAlignment.Left,
  PaddingY: BsPaddingY.Two,
  Size: BsSize.Small,
};

export const TimelineContext = React.createContext(
  setting // default value
);
