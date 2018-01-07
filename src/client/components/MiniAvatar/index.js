import React from 'react';
import { bool, func } from 'prop-types';

import {
  MiniAvatarContainer,
  MiniAvatarImage,
  ChevDown,
} from './styles';

const fakeProfil = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  avatar: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
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

MiniAvatar.propTypes = {
  displayMenu: bool.isRequired,
  handleChangeMenuDisplay: func.isRequired,
};

export default MiniAvatar;
