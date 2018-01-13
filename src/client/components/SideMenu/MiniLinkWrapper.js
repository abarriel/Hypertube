import React from 'react';

import {
  MiniLinkWrapperContainer,
  MiniLinkWrapperElem,
} from './styles';
import { menu } from './menu';

const MiniLinkWrapper = () => (
  <MiniLinkWrapperContainer>
    {menu.map(elem => (
      <MiniLinkWrapperElem key={elem.id}>
        {elem.label}
      </MiniLinkWrapperElem>
    ))}
  </MiniLinkWrapperContainer>
);

export default MiniLinkWrapper;
