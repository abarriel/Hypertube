import React from 'react';
import { number } from 'prop-types';

import { ScrollBarContainer, ScrollBarInner } from './styles';
import {
  isScrollEnd,
  getScrollBarWidth,
  getScrollBarMargin
} from './utils';

const ScrollBar = ({
  start,
  length,
  end,
  width,
}) => (
  <ScrollBarContainer isEnd={isScrollEnd(start, end, length)}>
    <ScrollBarInner
      length={length}
      width={getScrollBarWidth(width, length)}
      margin={getScrollBarMargin(width, getScrollBarWidth(width, length), start, length, end)}
    />
  </ScrollBarContainer>
);

ScrollBar.propTypes = {
  start: number.isRequired,
  end: number.isRequired,
  width: number.isRequired,
  length: number.isRequired,
};

export default ScrollBar;
