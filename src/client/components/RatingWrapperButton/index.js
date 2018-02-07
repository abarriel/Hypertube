import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  func,
  bool,
  object,
} from 'prop-types';

import {
  resetMovies,
  changeParams,
} from '../../actions/movies';
import {
  RatingButtonContainer,
  Text,
  Chev,
  Rate,
  Cross,
} from './styles';
import RatingWrapper from './RatingWrapper';

const RatingButton = ({
  handleChangeWrapped,
  wrapped,
  handleChangeRate,
  handleResetRate,
  rate,
  changeParams,
  resetMovies,
}) => (
  <RatingButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Rating</Text>
    <Rate>{`${rate.from} - ${rate.to}`}</Rate>
    <Cross
      canreset={(rate.from !== 0 || rate.to !== 5).toString()}
      onClick={() => {
        resetMovies();
        handleChangeWrapped();
        handleResetRate();
        changeParams({
          ratings: {
            from: 0,
            to: 5,
          },
          count: 0,
          start: 0,
        });
      }}
    />
    <Chev />
    {!wrapped &&
      <RatingWrapper
        handleChangeWrapped={handleChangeWrapped}
        handleChangeRate={handleChangeRate}
        rating={rate}
        changeParams={changeParams}
        resetMovies={resetMovies}
      />
    }
  </RatingButtonContainer>
);

RatingButton.propTypes = {
  wrapped: bool.isRequired,
  rate: object,
  handleChangeWrapped: func.isRequired,
  handleChangeRate: func.isRequired,
  handleResetRate: func.isRequired,
  changeParams: func.isRequired,
  resetMovies: func.isRequired,
};

const actions = { changeParams, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
      rate: {
        from: 0,
        to: 5,
      },
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
      handleResetRate: () => () => ({
        rate: {
          from: 0,
          to: 5,
        },
      }),
      handleChangeRate: () => newRate => {
        let newFrom = newRate.from;
        let newTo = newRate.to;
        if (newFrom > newTo) {
          newFrom = newTo;
        }
        if (newTo < newFrom) {
          newTo = newFrom;
        }
        return {
          rate: {
            from: newFrom,
            to: newTo,
          },
        };
      },
    },
  ),
)(RatingButton);

