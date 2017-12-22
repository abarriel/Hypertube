import React from 'react';
import { bool } from 'prop-types';

import {
  WrapMenuContainer,
  WrapMenuElem,
  WrapMenuElemText,
} from './styles';

const WrapMenu = ({
  displayMenu,
}) => (
  <WrapMenuContainer displayMenu={displayMenu}>
    <WrapMenuElem>
      <WrapMenuElemText>Mon Compte</WrapMenuElemText>
    </WrapMenuElem>
    <WrapMenuElem>
      <WrapMenuElemText>Deconnexion</WrapMenuElemText>
    </WrapMenuElem>
  </WrapMenuContainer>
);

WrapMenu.propTypes = {
  displayMenu: bool.isRequired,
};

export default WrapMenu;
