import Bullet from './Bullet';
import Content from './Content';
import React, { useContext } from 'react';
import { Alignment, CenterPipeCardProps } from './Type';
import { TimelineContext } from './TimelineContext';

const CardWithCenterPipe = ({
  datetime,
  title,
  content,
  isActive,
  bottomLine,
  topLine,
  alignment,
}: CenterPipeCardProps) => {
  const timelineContext = useContext(TimelineContext);
  return (
    <div className="row no-gutters">
      {alignment === Alignment.Right && (
        <React.Fragment>
          <div className={`col-${timelineContext.Size}`}></div>
          <Bullet
            alignment={Alignment.Right}
            isActive={isActive}
            bottomLine={bottomLine}
            topLine={topLine}
          />
        </React.Fragment>
      )}
      <Content
        datetime={datetime}
        title={title}
        content={content}
        isActive={isActive}
      />
      {alignment === Alignment.Left && (
        <React.Fragment>
          <Bullet
            alignment={Alignment.Right}
            isActive={isActive}
            bottomLine={bottomLine}
            topLine={topLine}
          />
          <div className={`col-${timelineContext.Size}`}></div>
        </React.Fragment>
      )}
    </div>
  );
};
export default CardWithCenterPipe;
