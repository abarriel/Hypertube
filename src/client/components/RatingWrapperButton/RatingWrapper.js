import React from 'react';
import {
  func,
  object,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  resetMovies,
  changeParams,
} from '../../actions/movies';
import { isAble } from './utils';
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
  handleChangeRate,
  resetMovies,
  changeParams,
  rating,
}) => (
  <RatingWrapperOverlay>
    <RatingWrapperContainer>
      <Title>From</Title>
      {ratingTab.map(from => (
        <Value
          key={from.id}
          isAble={isAble(rating.from, rating.to, from.value, 'from')}
          onClick={() => {
            if (!isAble(rating.from, rating.to, from.value, 'from')) return;
            resetMovies();
            handleChangeRate({ from: from.value, to: rating.to });
            changeParams({
              ratings: {
                from: from.value,
                to: rating.to,
              },
              count: 0,
              start: 0,
            });
          }}
        >
          {from.value}
        </Value>
      ))}
      <Title>To</Title>
      {ratingTab.map(to => (
        <Value
          key={to.id}
          isAble={isAble(rating.from, rating.to, to.value, 'to')}
          onClick={() => {
            if (!isAble(rating.from, rating.to, to.value, 'to')) return;
            resetMovies();
            handleChangeRate({ from: rating.from, to: to.value });
            changeParams({
              ratings: {
                from: rating.from,
                to: to.value,
              },
              start: 0,
              count: 0,
            });
          }}
        >
          {to.value}
        </Value>
      ))}
    </RatingWrapperContainer>
  </RatingWrapperOverlay>
);

RatingWrapper.propTypes = {
  handleChangeRate: func.isRequired,
  resetMovies: func.isRequired,
  rating: object.isRequired,
  changeParams: func.isRequired,
};

const actions = { changeParams, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(RatingWrapper);
