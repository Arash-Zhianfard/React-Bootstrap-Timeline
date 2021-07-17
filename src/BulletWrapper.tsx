import React from "react";


const BulletWrapper= ({ drawLine }: { drawLine: boolean } )=> {
  var drawLineClass = drawLine ? "border-right" : "";
  return (
    <div className="row h-50">
      <div className={`col ${drawLineClass}`}>&nbsp;</div>
      <div className="col">&nbsp;</div>
    </div>
  );
};
export default BulletWrapper;
