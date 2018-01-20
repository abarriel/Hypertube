import React from 'react';
import {
  string,
  func,
  number,
} from 'prop-types';

import {
  WIDTH,
  MARGIN,
} from '../constants';
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

const getMoveDirection = (direction, length, size, width, start) => {
  const maxStart = Math.round(length - (width / (WIDTH + (2 * MARGIN))));
  if (direction === 'left') {
    return -size;
  }
  if ((start + size) > maxStart) {
    return (maxStart - start) + 1;
  }
  return size;
};

const Arrows = ({
  direction,
  move,
  length,
  size,
  width,
  start,
}) => (
  <ArrowContainer direction={direction} onClick={() => move(getMoveDirection(direction, length, size, width, start))}>
    {getArrow(direction)}
  </ArrowContainer>
);

Arrows.propTypes = {
  direction: string.isRequired,
  move: func.isRequired,
  length: number.isRequired,
  width: number.isRequired,
  size: number.isRequired,
  start: number.isRequired,
};

export default Arrows;
