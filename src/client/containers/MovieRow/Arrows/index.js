import React from 'react';
import {
  string,
  func,
} from 'prop-types';

import {
  ArrowContainer,
  LeftArrow,
  RightArrow,
} from './styles';

const getArrow = direction => {
  if (direction === 'left') {
    return <LeftArrow />;
  }
  return <RightArrow />;
};

const getMoveDirection = direction => {
  if (direction === 'left') {
    return -1;
  }
  return 1;
};

const Arrows = ({
  direction,
  move,
}) => (
  <ArrowContainer direction={direction} onClick={() => move(getMoveDirection(direction))}>
    {getArrow(direction)}
  </ArrowContainer>
);

Arrows.propTypes = {
  direction: string.isRequired,
  move: func.isRequired,
};

export default Arrows;
