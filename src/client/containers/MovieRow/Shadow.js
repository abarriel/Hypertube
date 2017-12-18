import React from 'react';
import { withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

import { ShadowContainer } from './styles';

const Shadow = ({
  isHover,
  handleHover,
  handleNotHover,
  children,
}) => (
  <ShadowContainer
    isHover={isHover}
    onMouseEnter={handleHover}
    onMouseLeave={handleNotHover}
  >
    {children}
  </ShadowContainer>
);

Shadow.propTypes = {
  children: PropTypes.node.isRequired,
  isHover: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleNotHover: PropTypes.func.isRequired,
};

const enhance = withStateHandlers(
  {
    isHover: false,
  },
  {
    handleHover: () => () => ({ isHover: true }),
    handleNotHover: () => () => ({ isHover: false }),
  },
);

export default enhance(Shadow );
