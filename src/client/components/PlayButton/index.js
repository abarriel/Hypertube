import React from 'react';
import {
  string,
} from 'prop-types';

import {
  PlayButtonContainer,
  PlayLogo,
} from './styles';

const PlayButton = ({ to }) => (
  <PlayButtonContainer to={to}>
    <PlayLogo />
    Lecture
  </PlayButtonContainer>
);

PlayButton.propTypes = {
  to: string.isRequired,
};

export default PlayButton;
