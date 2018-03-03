import React from 'react';
import { bool, func, object } from 'prop-types';

import {
  MiniAvatarContainer,
  MiniAvatarImage,
  ChevDown,
} from './styles';

const fakeProfil = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  avatar: 'https://secure.netflix.com/ffe/profiles/avatars_v2/32x32/PICON_026.png',
};

const propTypes = {
  displayMenu: bool.isRequired,
  handleChangeMenuDisplay: func.isRequired,
  profil: object,
};

const MiniAvatar = ({
  profil = fakeProfil,
  displayMenu,
  handleChangeMenuDisplay,
}) => (
  <MiniAvatarContainer onMouseEnter={() => handleChangeMenuDisplay(!displayMenu)}>
    <MiniAvatarImage
      avatar={profil.avatar}
    />
    <ChevDown />
  </MiniAvatarContainer>
);

MiniAvatar.propTypes = propTypes;

export default MiniAvatar;
