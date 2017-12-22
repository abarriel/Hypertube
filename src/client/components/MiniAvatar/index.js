import React from 'react';
import { withStateHandlers } from 'recompose';
import { bool, func } from 'prop-types';

import {
  MiniAvatarContainer,
  Shadow,
  ChevDown,
} from './styles';

const fakeProfil = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  avatar: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
};

const MiniAvatar = ({
  profil = fakeProfil,
  displayShadow,
  handleChangeShadowDisplay,
  displayMenu,
  handleChangeMenuDisplay,
}) => (
  <MiniAvatarContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    onClick={() => handleChangeMenuDisplay(!displayMenu)}
    avatar={profil.avatar}
  >
    <Shadow displayShadow={displayShadow}>
      <ChevDown />
    </Shadow>
  </MiniAvatarContainer>
);

MiniAvatar.propTypes = {
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  displayMenu: bool.isRequired,
  handleChangeMenuDisplay: func.isRequired,
};

const enhance = withStateHandlers(
  {
    displayShadow: false,
  },
  {
    handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
  },
);

export default enhance(MiniAvatar);
