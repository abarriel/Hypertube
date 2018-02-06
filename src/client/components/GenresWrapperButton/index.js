import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  string,
} from 'prop-types';

import {
  GenresButtonContainer,
  Text,
  Chev,
} from './styles';
import GenresWrapper from './GenresWrapper';

export const GenresButton = ({
  handleChangeWrapped,
  wrapped,
  selectedGenre,
}) => (
  <GenresButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>{selectedGenre || 'Genres'}</Text>
    <Chev />
    {!wrapped && <GenresWrapper handleChangeWrapped={handleChangeWrapped} />}
  </GenresButtonContainer>
);

GenresButton.propTypes = {
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
)(GenresButton);
