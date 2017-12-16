import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuElemStyled,
  Separator,
  LinkStyled,
} from './styles';

const MenuElem = ({
  icon,
  last,
  to,
  selected,
}) => (
  <MenuElemStyled to={to} selected={selected}>
    {icon}
    {!last && <Separator />}
  </MenuElemStyled>
);

MenuElem.propTypes = {
  icon: PropTypes.node.isRequired,
  last: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MenuElem;
