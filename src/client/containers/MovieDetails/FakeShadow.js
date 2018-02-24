import React from 'react';

import {
  FakeShadowContainer,
  FakeShadowRight,
  FakeShadowLeft,
} from './styles';

const FakeShadow = () => (
  <FakeShadowContainer>
    <FakeShadowLeft />
    <FakeShadowRight />
  </FakeShadowContainer>
);

export default FakeShadow;
