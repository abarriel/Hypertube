import React from 'react';
import { withStateHandlers } from 'recompose';
import { bool, func } from 'prop-types';

import {
  MiniAvatarContainer,
  Shadow,
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
}) => (
  <MiniAvatarContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    avatar={profil.avatar}
  >
    {displayShadow &&
      <Shadow></Shadow>
    }
  </MiniAvatarContainer>
);

MiniAvatar.propTypes = {
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
}
const enhance = withStateHandlers(
  {
    displayShadow: false,
  },
  {
    handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
  },
);

export default enhance(MiniAvatar);
