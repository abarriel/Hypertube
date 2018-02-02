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
  changeParams,
} from '../../actions/movies';
import { getReqParams } from '../../selectors/movies';
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
  handleChangeRate,
  updateMovies,
  resetMovies,
  changeParams,
  rating,
  reqParams,
}) => (
  <RatingWrapperOverlay>
    <RatingWrapperContainer>
      <Title>From</Title>
      {ratingTab.map(from => (
        <Value
          key={from.id}
          onClick={() => {
            handleChangeRate({ from: from.id });
            changeParams({ ratings: rating });
            req.movies({ ...reqParams, ratings: `${rating.from},${rating.to}` })
              .then(data => {
                resetMovies();
                updateMovies(data);
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
          onClick={() => {
            handleChangeRate({ to: to.id });
            changeParams({ ratings: rating });
            req.movies({ ...reqParams, ratings: `${rating.from},${rating.to}` })
              .then(data => {
                resetMovies();
                updateMovies(data);
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
  handleChangeWrapped: func.isRequired,
  handleChangeRate: func.isRequired,
  resetMovies: func.isRequired,
  rating: object.isRequired,
  reqParams: object.isRequired,
};

const mapStateToProps = state => ({
  reqParams: getReqParams(state),
});

const actions = { changeParams, updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatingWrapper);
