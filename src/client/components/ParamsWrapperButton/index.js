import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  string,
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
  selectedGenre,
}) => (
  <ParamsWrapperButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>{selectedGenre || 'Genres'}</Text>
    <Chev />
    {!wrapped && <ParamsWrapper handleChangeWrapped={handleChangeWrapped} />}
  </ParamsWrapperButtonContainer>
);

ParamsWrapperButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  selectedGenre: string.isRequired,
};

export default withStateHandlers(
  {
    wrapped: true,
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
  },
)(ParamsWrapperButton);
