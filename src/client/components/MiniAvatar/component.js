import React from 'react';
import { func, string, bool } from 'prop-types';

import {
  MiniAvatarContainer,
  MiniAvatarImage,
  ChevDown,
} from './styles';

const propTypes = {
  handleChangeMenuDisplay: func.isRequired,
  profilPicture: string,
  displayMenu: bool.isRequired,
};

export const MiniAvatar = ({
  handleChangeMenuDisplay,
  profilPicture = '',
  displayMenu,
}) => (
  <MiniAvatarContainer onMouseEnter={() => handleChangeMenuDisplay(!displayMenu)}>
    <MiniAvatarImage
      profilPicture={profilPicture}
    />
    <ChevDown />
  </MiniAvatarContainer>
);

MiniAvatar.propTypes = propTypes;
