import * as React from "react";
import { useContext } from "react";
import { TimelineContext } from "./TimelineContext";
import { ContentProps } from "./Type";
const Content = ({ isActive, datetime, title, content }: ContentProps) => {
  const titleClass = isActive ? "success" : "muted";
  const borderClass = isActive ? "border-success shadow" : "";
  const timelineContext = useContext(TimelineContext);
  return (
    <div className={`col ${timelineContext.PaddingY}`}>
      <div className={`card ${borderClass}`}>
        <div className="card-body">
          <div className={`float-right text-${titleClass}`}>{datetime}</div>
          <h4 className={`card-title text-${titleClass}`}>{title}</h4>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
};
export default Content;
