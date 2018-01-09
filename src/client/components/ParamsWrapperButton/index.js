import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
} from 'prop-types';

import {
  ParamsWrapperButtonContainer,
  Text,
  Chev,
} from './styles';
import ParamsWrapper from './ParamsWrapper';

export const ParamsWrapperButton = ({
  handleChangeWrapped,
  wrapped,
}) => (
  <ParamsWrapperButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Genres</Text>
    <Chev />
    {!wrapped && <ParamsWrapper />}
  </ParamsWrapperButtonContainer>
);

ParamsWrapperButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
};

export default withStateHandlers(
  {
    wrapped: true,
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
  },
)(ParamsWrapperButton);
