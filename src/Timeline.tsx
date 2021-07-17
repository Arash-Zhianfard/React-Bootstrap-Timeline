import {  TimelineProps, CardProps, TimelineAlignment } from "./Type";
import React, { useContext, useEffect } from "react";
import CenterPipeCardSorter from "./CenterPipeCardSorter";
import LeftPipeCardSorter from "./LeftPipeCardSorter";
import { TimelineContext } from "./TimelineContext";
const Timeline = ({ cards, setting, children }: TimelineProps) => {
  const timelineContext = useContext(TimelineContext);
  const [cardElement, setcardElement] = React.useState<CardProps[] | []>([]);
  useEffect(() => {
    if (setting) {
      var userDefinedSetting = { ...setting };
      if (userDefinedSetting.Size)
        timelineContext.Size = userDefinedSetting.Size;
      if (userDefinedSetting.Alignment)
        timelineContext.Alignment = userDefinedSetting.Alignment;
      if (userDefinedSetting.PaddingY)
        timelineContext.PaddingY = userDefinedSetting.PaddingY;
    }
    if (cards) setcardElement((cardElement) => [...cardElement, ...cards]);
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      setcardElement((cardElement) => [...cardElement, element.props]);
    });
  }, []);

  var cardSorter = null;
  if (timelineContext.Alignment === TimelineAlignment.Center) {
    cardSorter = <CenterPipeCardSorter Cards={cardElement} />;
  } else {
    cardSorter = <LeftPipeCardSorter Cards={cardElement} />;
  }
  return (
    <div className={`container ${timelineContext.PaddingY}`}>{cardSorter}</div>
  );
};
export default Timeline;
