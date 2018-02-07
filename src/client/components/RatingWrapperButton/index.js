import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  func,
  bool,
  object,
} from 'prop-types';

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
}) => (
  <RatingButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>Rating</Text>
    <Rate>{`${rate.from} - ${rate.to}`}</Rate>
    <Cross
      canreset={(rate.from !== 0 || rate.to !== 5).toString()}
      onClick={() => {
        handleChangeWrapped();
        handleResetRate();
      }}
    />
    <Chev />
    {!wrapped && <RatingWrapper handleChangeWrapped={handleChangeWrapped} handleChangeRate={handleChangeRate} rating={rate} />}
  </RatingButtonContainer>
);

RatingButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  rate: object,
  handleChangeRate: func.isRequired,
  handleResetRate: func.isRequired,
};

export default withStateHandlers(
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
)(RatingButton);

