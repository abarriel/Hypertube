import React from 'react';
import PropTypes from 'prop-types';

import { ScrollBarContainer, ScrollBarInner } from './styles';

const getScrollBarWidth = length => Math.round(100 / length);

const getScrollBarMargin = (start, length) => {
  const margin = Math.round((100 / length) * start) + 2;
  if (margin < 2) {
    return 2;
  }
  return margin;
};

const ScrollBar = ({ start, length }) => (
  <ScrollBarContainer>
    <ScrollBarInner
      length={length}
      width={getScrollBarWidth(length)}
      margin={getScrollBarMargin(start, length)}
    />
  </ScrollBarContainer>
);

ScrollBar.propTypes = {
  start: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
}

export default ScrollBar;