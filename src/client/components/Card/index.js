import React from 'react';

import { string } from 'prop-types';

import { CardContainer } from './styles';

const Card = ({ width, height }) => (
  <CardContainer width={width} height={height}>
  </CardContainer>
);

Card.propTypes = {
  width: string,
  height: string,
};

export default Card;
