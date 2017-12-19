import React from 'react';
import PropTypes from 'prop-types';

import {
  RatingContainer,
  Full,
  Empty,
} from './styles';


const Rating = ({ rating, opacity }) => (
  <RatingContainer opacity={opacity}>
    {Array.from(new Array(rating), () => <Full />)}
    {Array.from(new Array(5 - rating), () => <Empty />)}
  </RatingContainer>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default Rating;
