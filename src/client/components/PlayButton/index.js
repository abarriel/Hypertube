import React from 'react';
import {
  string,
} from 'prop-types';

import {
  PlayButtonContainer,
} from './styles';

const PlayButton = ({ to }) => (
  <PlayButtonContainer to={to}>
    Lecture
  </PlayButtonContainer>
);

PlayButton.propTypes = {
  to: string.isRequired,
};

export default PlayButton;
