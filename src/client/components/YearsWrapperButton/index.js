import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  object,
} from 'prop-types';

import {
  YearsButtonContainer,
  Text,
  Chev,
  Values,
} from './styles';
import YearsWrapper from './YearsWrapper';

const YearsButton = ({
  handleChangeWrapped,
  wrapped,
  handleChangeValues,
  values,
}) => (
  <YearsButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Years</Text>
    <Values>{`${values.from} - ${values.to}`}</Values>
    <Chev />
    {!wrapped && <YearsWrapper handleChangeWrapped={handleChangeWrapped} handleChangeValues={handleChangeValues} years={values} />}
  </YearsButtonContainer>
);

YearsButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  values: object,
  handleChangeValues: func.isRequired,
};

export default withStateHandlers(
  {
    wrapped: true,
    values: {
      from: 1950,
      to: 2018,
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
)(YearsButton);

