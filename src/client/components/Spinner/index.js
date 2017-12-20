import React from 'react';

import { SpinnerContainer, SpinnerElem } from './styles';

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerElem height={30} delay={0} />
    <SpinnerElem height={45} delay={-1.1} />
    <SpinnerElem height={60} delay={-1} />
    <SpinnerElem height={45} delay={-0.9} />
    <SpinnerElem height={30} delay={-0.8} />
  </SpinnerContainer>
);

export default Spinner;

