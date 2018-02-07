import React from 'react';
import {
  func,
  object,
} from 'prop-types';

import {
  YearsWrapperContainer,
  YearsWrapperOverlay,
  Value,
  Title,
} from './styles';
import { isAble } from './utils';
import { yearsTab } from './yearsTab';

const YearsWrapper = ({
  handleChangeValues,
  resetMovies,
  changeParams,
  years,
}) => (
  <YearsWrapperOverlay>
    <YearsWrapperContainer>
      <Title>From</Title>
      {yearsTab.map(from => (
        <Value
          key={from.id}
          isAble={isAble(years.from, years.to, from.value, 'from')}
          onClick={() => {
            if (!isAble(years.from, years.to, from.value, 'from')) return;
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
          isAble={isAble(years.from, years.to, to.value, 'to')}
          onClick={() => {
            if (!isAble(years.from, years.to, to.value, 'to')) return;
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
  handleChangeValues: func.isRequired,
  years: object.isRequired,
  changeParams: func.isRequired,
  updateMovies: func.isRequired,
  resetMovies: func.isRequired,
};

export default YearsWrapper;
