import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  bool,
  func,
} from 'prop-types';

import MiniLinkWrapper from './MiniLinkWrapper';
import {
  MiniLinkContainer,
  Chev,
} from './styles';

const MiniLink = ({
  wrapped,
  handleChangeWrapped,
}) => (
  <MiniLinkContainer
    onMouseEnter={() => wrapped && handleChangeWrapped()}
  >
    Parcourir
    <Chev />
    {!wrapped && <MiniLinkWrapper handleChangeWrapped={handleChangeWrapped} />}
  </MiniLinkContainer>
);

MiniLink.propTypes = {
  wrapped: bool.isRequired,
  handleChangeWrapped: func.isRequired,
};

export default withStateHandlers(
  {
    wrapped: true,
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
  },
)(MiniLink);
