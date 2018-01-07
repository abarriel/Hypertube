import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuElemStyled,
  MenuElemText,
  UnderLine,
} from './styles';

const MenuElem = ({
  to,
  label,
  selected,
}) => (
  <MenuElemStyled to={to} selected={selected}>
    <MenuElemText selected={selected}>{label}</MenuElemText>
    {selected && <UnderLine />}
  </MenuElemStyled>
);

MenuElem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MenuElem;
