import React from 'react';
import {
  func,
  object,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateMovies,
  resetMovies,
  changeParams,
} from '../../actions/movies';
import { getReqParams } from '../../selectors/movies';
import {
  YearsWrapperContainer,
  YearsWrapperOverlay,
  Value,
  Title,
} from './styles';

const yearsTab = [
  {
    id: 0,
    value: 1950,
  },
  {
    id: 1,
    value: 1960,
  },
  {
    id: 2,
    value: 1970,
  },
  {
    id: 3,
    value: 1980,
  },
  {
    id: 4,
    value: 1990,
  },
  {
    id: 5,
    value: 2000,
  },
  {
    id: 6,
    value: 2010,
  },
  {
    id: 8,
    value: 2018,
  },
];

const YearsWrapper = ({
  handleChangeWrapped,
  handleChangeValues,
  resetMovies,
  changeParams,
  years,
  reqParams,
}) => (
  <YearsWrapperOverlay>
    <YearsWrapperContainer>
      <Title>From</Title>
      {yearsTab.map(from => (
        <Value
          key={from.id}
          onClick={() => {
            resetMovies();
            handleChangeValues({ from: from.value });
            changeParams({
              years: {
                from: from.value,
                to: years.to,
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
      {yearsTab.map(to => (
        <Value
          key={to.id}
          onClick={() => {
            resetMovies();
            handleChangeValues({ to: to.value });
            changeParams({
              years: {
                from: years.from,
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
    </YearsWrapperContainer>
  </YearsWrapperOverlay>
);

YearsWrapper.propTypes = {
  handleChangeWrapped: func.isRequired,
  handleChangeValues: func.isRequired,
  resetMovies: func.isRequired,
  years: object.isRequired,
  changeParams: func.isRequired,
  updateMovies: func.isRequired,
};

const mapStateToProps = state => ({
  reqParams: getReqParams(state),
});

const actions = { changeParams, updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YearsWrapper);
