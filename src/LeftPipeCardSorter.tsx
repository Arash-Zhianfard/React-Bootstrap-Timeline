import React from "react";
import CardWithLeftPipe from "./CardWithLeftPipe";
import { CardProps } from "./Type";

const LeftPipeCardSorter = ({ Cards }: { Cards: CardProps[] }) => {
  return (
    <React.Fragment>
      {Cards.map((cardDefinition: CardProps, index) => {
        if (index === 0) {
          var cardProps = {
            ...cardDefinition,
            bottomLine: true,
            topLine: false,
          };
          return <CardWithLeftPipe {...cardProps} />;
        } else if (index === Cards.length - 1) {
          var cardProps = {
            ...cardDefinition,
            bottomLine: false,
            topLine: true,
          };
          return <CardWithLeftPipe {...cardProps} />;
        } else {
          var cardProps = {
            ...cardDefinition,
            bottomLine: true,
            topLine: true,
          };
          return <CardWithLeftPipe {...cardProps} />;
        }
      })}
    </React.Fragment>
  );
};
export default LeftPipeCardSorter;
