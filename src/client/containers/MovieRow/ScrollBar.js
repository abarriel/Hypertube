import React from 'react';
import {
  number,
  bool,
} from 'prop-types';

import { ScrollBarContainer, ScrollBarInner } from './styles';
import {
  isScrollEnd,
  getScrollBarWidth,
  getScrollBarMargin,
} from './utils';

const ScrollBar = ({
  start,
  length,
  end,
  width,
  isHover,
}) => (
  <ScrollBarContainer isHover={isHover}>
    {/* <ScrollBarInner
      length={length}
      width={getScrollBarWidth(width, length)}
      margin={getScrollBarMargin(width, getScrollBarWidth(width, length), start, length, end)}
    /> */}
  </ScrollBarContainer>
);

ScrollBar.propTypes = {
  start: number.isRequired,
  end: number.isRequired,
  width: number.isRequired,
  length: number.isRequired,
  isHover: bool.isRequired,
};

export default ScrollBar;
