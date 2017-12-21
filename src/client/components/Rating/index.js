import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { RatingContainer, Full, Empty } from './styles';

const ratingArray = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const Rating = ({ rating, opacity }) => {
  return (
    <RatingContainer opacity={opacity}>
      {map(ratingArray, elem => {
        if (elem.id < rating) {
          return <Full key={elem.id} />;
        }
        return <Empty key={elem.id} />;
      })}
    </RatingContainer>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default Rating;
