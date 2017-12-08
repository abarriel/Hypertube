import React from 'react';
import PropTypes from 'prop-types';

import { MenuElemStyled } from './styles';

const MenuElem = ({ icon }) => (
  <MenuElemStyled>
    {icon}
  </MenuElemStyled>
);

MenuElem.propTypes = {
  icon: PropTypes.node.isRequired
}

export default MenuElem;
