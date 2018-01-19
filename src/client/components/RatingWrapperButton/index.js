import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  string,
} from 'prop-types';

import {
  RatingButtonContainer,
  Text,
  Chev,
} from './styles';
import RatingWrapper from './RatingWrapper';

export const RatingButton = ({
  handleChangeWrapped,
  wrapped,
  selectedRate = 0,
}) => (
  <RatingButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>{selectedRate || 'Rating'}</Text>
    <Chev />
    {!wrapped && <RatingWrapper handleChangeWrapped={handleChangeWrapped} />}
  </RatingButtonContainer>
);

RatingButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  selectedGenre: string,
};

export default withStateHandlers(
  {
    wrapped: true,
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
  },
)(RatingButton);
