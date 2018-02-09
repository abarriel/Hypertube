import React from 'react';
import {
  number,
  string,
} from 'prop-types';

import {
  LogoContainer,
  LogoImage,
} from './styles';

const Logo = ({ width = 130, height = 100, position = 'relative' }) => (
  <LogoContainer width={width} height={height} position={position}>
    <LogoImage />
  </LogoContainer>
);

Logo.propTypes = {
  width: number,
  height:number,
  position: string,
};

export default Logo;
