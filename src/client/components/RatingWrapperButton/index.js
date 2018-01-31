import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  string,
  object,
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
  rating = {
    from: 0,
    to: 5,
  },
}) => (
  <RatingButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Rating</Text>
    <Chev />
    {!wrapped && <RatingWrapper handleChangeWrapped={handleChangeWrapped} />}
  </RatingButtonContainer>
);

RatingButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  selectedGenre: string,
  rating: object,
};

export default withStateHandlers(
  {
    wrapped: true,
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
  },
)(RatingButton);
