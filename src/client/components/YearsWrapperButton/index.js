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
  updateMovies,
  resetMovies,
  changeParams,
} from '../../actions/movies';
import {
  YearsButtonContainer,
  Text,
  Chev,
  Values,
  Cross,
} from './styles';
import YearsWrapper from './YearsWrapper';
import { MIN_DATE, MAX_DATE } from './constants';

const YearsButton = ({
  handleChangeWrapped,
  wrapped,
  handleChangeValues,
  values,
  changeParams,
  updateMovies,
  resetMovies,
}) => (
  <YearsButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Years</Text>
    <Values>{`${values.from} - ${values.to}`}</Values>
    <Cross
      canreset={(values.from !== MIN_DATE || values.to !== MAX_DATE).toString()}
      onClick={() => {
        resetMovies();
        handleChangeWrapped();
        handleChangeValues({ from: MIN_DATE, to: MAX_DATE });
        changeParams({
          years: {
            from: MIN_DATE,
            to: MAX_DATE,
          },
          count: 0,
          start: 0,
        });
      }}
    />
    <Chev />
    {!wrapped &&
      <YearsWrapper
        handleChangeWrapped={handleChangeWrapped}
        handleChangeValues={handleChangeValues}
        years={values}
        changeParams={changeParams}
        updateMovies={updateMovies}
        resetMovies={resetMovies}
      />
    }
  </YearsButtonContainer>
);

YearsButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  values: object,
  handleChangeValues: func.isRequired,
  changeParams: func.isRequired,
  updateMovies: func.isRequired,
  resetMovies: func.isRequired,
};

const actions = { changeParams, updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
      values: {
        from: MIN_DATE,
        to: MAX_DATE,
      },
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
      handleChangeValues: ({ values }) => newValues => {
        let newFrom = newValues.from || values.from;
        let newTo = newValues.to || values.to;
        if (newFrom > newTo) {
          newFrom = newTo;
        }
        if (newTo < newFrom) {
          newTo = newFrom;
        }
        return {
          values: {
            from: newFrom,
            to: newTo,
          },
        };
      },
    },
  ),
)(YearsButton);

