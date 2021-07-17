import React from "react";
import Bullet from "./Bullet";
import Content from "./Content";
import { LeftPipeCardProps, Alignment } from "./Type";

const CardWithLeftPipe = ({
  datetime,
  title,
  content,
  isActive,
  bottomLine,
  topLine,
}: LeftPipeCardProps) => {
  return (
    <div className="row">
      <Bullet
        alignment={Alignment.Left}
        isActive={isActive}
        bottomLine={bottomLine}
        topLine={topLine}
      />
      <Content
        datetime={datetime}
        title={title}
        content={content}
        isActive={isActive}
      />
    </div>
  );
};
export default CardWithLeftPipe;
