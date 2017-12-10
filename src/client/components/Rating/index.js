import React from 'react';
import PropTypes from 'prop-types';

import { RatingContainer, Full, Empty } from './styles';

const Rating = ({ rating }) => (
  <RatingContainer>
    {Array.from(new Array(rating),(val,index) => <Full />)}
    {Array.from(new Array(5 - rating),(val,index) => <Empty />)}
  </RatingContainer>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Rating;