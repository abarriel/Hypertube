import React from 'react';
import { bool } from 'prop-types';

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
      <WrapMenuElemText to="/">Mon Compte</WrapMenuElemText>
    </WrapMenuElem>
    <WrapMenuElem>
      <Icon />
      <WrapMenuElemText to="/login">Deconnexion</WrapMenuElemText>
    </WrapMenuElem>
  </WrapMenuContainer>
);

WrapMenu.propTypes = {
  displayMenu: bool.isRequired,
};

export default WrapMenu;
