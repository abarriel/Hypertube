import React from 'react';
import {
  func,
} from 'prop-types';

import {
  MiniLinkWrapperContainer,
  MiniLinkWrapperElem,
  SideLine,
} from './styles';
import { menu } from './menu';

const isSelected = pathName => window.location.pathname === pathName;

const MiniLinkWrapper = ({
  handleChangeWrapped,
}) => (
  <MiniLinkWrapperContainer
    onMouseLeave={() => handleChangeWrapped()}
    onClick={() => handleChangeWrapped()}
  >
    {menu.map(elem => (
      <MiniLinkWrapperElem key={elem.id} to={elem.to} isSelected={isSelected(elem.to)}>
        {isSelected(elem.to) && <SideLine />}
        {elem.label}
      </MiniLinkWrapperElem>
    ))}
  </MiniLinkWrapperContainer>
);

MiniLinkWrapper.propTypes = {
  handleChangeWrapped: func.isRequired,
};

export default MiniLinkWrapper;
