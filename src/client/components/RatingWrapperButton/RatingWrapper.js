import React from 'react';
import {
  array,
  func,
  object,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import req from '../../request';
import {
  updateMovies,
  resetMovies,
} from '../../actions/movies';
import {
  RatingWrapperContainer,
  RatingWrapperOverlay,
  Value,
  Title,
} from './styles';

const ratingTab = [
  {
    id: 0,
    value: 0,
  },
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
];

const RatingWrapper = ({
  handleChangeWrapped,
  updateMovies,
  resetMovies,
  rating,
}) => (
  <RatingWrapperOverlay>
    <RatingWrapperContainer>
      <Title>From</Title>
      {ratingTab.map(rating => (
        <Value
          key={rating.id}
        >
          {rating.value}
        </Value>
      ))}
      <Title>To</Title>
      {ratingTab.map(rating => (
        <Value
          key={rating.id}
        >
          {rating.value}
        </Value>
      ))}
    </RatingWrapperContainer>
  </RatingWrapperOverlay>
);

RatingWrapper.propTypes = {
  handleChangeWrapped: func.isRequired,
  resetMovies: func.isRequired,
  rating: object.isRequired,
};

const actions = { updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(RatingWrapper);
