import React from 'react';
import PropTypes from 'prop-types';

import { MenuElemStyled, Separator } from './styles';

const MenuElem = ({ icon, last }) => (
  <MenuElemStyled>
    {icon}
    {!last && <Separator />}
  </MenuElemStyled>
);

MenuElem.propTypes = {
  icon: PropTypes.node.isRequired,
  last: PropTypes.bool.isRequired,
};

export default MenuElem;
