import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MenuElemStyled, Separator } from './styles';

const MenuElem = ({ icon, last, to }) => (
  <MenuElemStyled>
    <Link to={to}>
      {icon}
      {!last && <Separator />}
    </Link>
  </MenuElemStyled>
);

MenuElem.propTypes = {
  icon: PropTypes.node.isRequired,
  last: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuElem;
