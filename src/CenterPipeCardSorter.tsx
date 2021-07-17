import React from "react";
import CardWithCenterPipe from "./RightCard";
import { Alignment, CardProps } from "./Type";
const CenterPipeCardSorter = ({ Cards }: { Cards: CardProps[] }) => {
  return (
    <React.Fragment>
      {Cards.map((card: CardProps, index) => {
        var alignment = index % 2 ? Alignment.Left : Alignment.Right;
        if (index === 0) {
          var cardProps = {
            ...card,
            bottomLine: true,
            topLine: false,
            alignment: alignment,
          };
          return (
            <React.Fragment>
              <CardWithCenterPipe {...cardProps} />
            </React.Fragment>
          );
        } else if (index === Cards.length - 1) {
          var cardProps = {
            ...card,
            bottomLine: false,
            topLine: true,
            alignment: alignment,
          };
          return (
            <React.Fragment>
              <CardWithCenterPipe {...cardProps} />
            </React.Fragment>
          );
        } else {
          var cardProps = {
            ...card,
            bottomLine: true,
            topLine: true,
            alignment: alignment,
          };
          return (
            <React.Fragment>
              <CardWithCenterPipe {...cardProps} />
            </React.Fragment>
          );
        }
      })}
    </React.Fragment>
    
  );
};
export default CenterPipeCardSorter;
