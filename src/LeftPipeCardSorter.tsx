import React from 'react';
import CardWithLeftPipe from './CardWithLeftPipe';
import { CardProps, LeftPipeCardProps } from './Type';

const LeftPipeCardSorter = ({ Cards }: { Cards: CardProps[] }) => {
  return (
    <React.Fragment>
      {Cards.map((cardDefinition: CardProps, index) => {
        var cardProps: LeftPipeCardProps;
        if (index === 0) {
          cardProps = {
            ...cardDefinition,
            bottomLine: true,
            topLine: false,
          };
        } else if (index === Cards.length - 1) {
          cardProps = {
            ...cardDefinition,
            bottomLine: false,
            topLine: true,
          };
        } else {
          cardProps = {
            ...cardDefinition,
            bottomLine: true,
            topLine: true,
          };
        }
        return <CardWithLeftPipe {...cardProps} key={index} />;
      })}
    </React.Fragment>
  );
};
export default LeftPipeCardSorter;
