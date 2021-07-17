import { BulletProps } from "./Type";
import BulletWrapper from "./BulletWrapper";
import { Alignment } from "./Type";
import  React,{ useContext } from "react";
import { TimelineContext } from "./TimelineContext";

const Bullet = ({ isActive, alignment, topLine, bottomLine }: BulletProps) => {
  const timelineContext = useContext(TimelineContext);
  var typeClass = isActive ? "success" : "light border";
  var alignClass = alignment === Alignment.Right ? `col-${timelineContext.Size}-1` : "col-auto";
  var bottomWrapper = bottomLine ? (
    <BulletWrapper drawLine={true} />
  ) : (
    <BulletWrapper drawLine={false} />
  );
  var topWrapper =  topLine ? (
    <BulletWrapper drawLine={true} />
  ) : (
    <BulletWrapper drawLine={false} />
  );
  return (
    <div className={`${alignClass} text-center flex-column d-none d-${timelineContext.Size}-flex`}>
      {topWrapper}
      <h5 className="m-2">
        <span className={`badge badge-pill bg-${typeClass}`}>&nbsp;</span>
      </h5>
      {bottomWrapper}
    </div>
  );
};
export default Bullet;
