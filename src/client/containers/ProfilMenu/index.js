import React from 'react';
import { withStateHandlers } from 'recompose';
import { bool, func } from 'prop-types';

import { ProfilMenuContainer } from './styles';
import MiniAvatar from '../../components/MiniAvatar';
import WrapMenu from '../../components/WrapMenu';

const ProfilMenu = ({
  displayMenu,
  handleChangeMenuDisplay,
}) => (
  <ProfilMenuContainer>
    <MiniAvatar
      handleChangeMenuDisplay={handleChangeMenuDisplay}
      displayMenu={displayMenu}
    />
    {displayMenu && <WrapMenu />}
  </ProfilMenuContainer>
);

ProfilMenu.propTypes = {
  displayMenu: bool.isRequired,
  handleChangeMenuDisplay: func.isRequired,
};

const enhance = withStateHandlers(
  {
    displayMenu: false,
  },
  {
    handleChangeMenuDisplay: () => displayMenu => ({ displayMenu }),
  },
);

export default enhance(ProfilMenu);

