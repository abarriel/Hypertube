import React from 'react';
import { bool } from 'prop-types';
import req from '../../request';
import {
  WrapMenuContainer,
  WrapMenuElem,
  WrapMenuElemText,
  Icon,
} from './styles';

const WrapMenu = ({
  displayMenu,
}) => (
  <WrapMenuContainer displayMenu={displayMenu}>
    <WrapMenuElem>
      <Icon />
      <WrapMenuElemText to="/profil">My account</WrapMenuElemText>
    </WrapMenuElem>
    <WrapMenuElem>
      <Icon />
      <WrapMenuElemText
        to="/"
        onClick={() => {
          req.logout().then(() => {
            window.location.replace('/login');
          });
        }
        }
      >
        Log out
      </WrapMenuElemText>
    </WrapMenuElem>
  </WrapMenuContainer>
);

WrapMenu.propTypes = {
  displayMenu: bool.isRequired,
};

export default WrapMenu;
