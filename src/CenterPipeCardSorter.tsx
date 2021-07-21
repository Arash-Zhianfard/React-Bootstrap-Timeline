import React from 'react';
import CardWithCenterPipe from './CardWithCenterPipe';
import { Alignment, CardProps, CenterPipeCardProps } from './Type';
const CenterPipeCardSorter = ({ Cards }: { Cards: CardProps[] }) => {
  return (
    <React.Fragment>
      {Cards.map((card: CardProps, index) => {
        var alignment = index % 2 ? Alignment.Left : Alignment.Right;
        var cardProps: CenterPipeCardProps;
        if (index === 0) {
          cardProps = {
            ...card,
            bottomLine: true,
            topLine: false,
            alignment: alignment,
          };
        } else if (index === Cards.length - 1) {
          cardProps = {
            ...card,
            bottomLine: false,
            topLine: true,
            alignment: alignment,
          };
        } else {
          cardProps = {
            ...card,
            bottomLine: true,
            topLine: true,
            
            alignment: alignment,
          };
        }
        return (
          <React.Fragment>
            <CardWithCenterPipe {...cardProps} key={index}/>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
export default CenterPipeCardSorter;
