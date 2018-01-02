import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import {
  number,
  func,
  string,
} from 'prop-types';

import { INTERVALE } from './constants';
import {
  SlideSelectContainer,
  Line,
  Circle,
  Label,
} from './styles';

const SlideSelect = ({
  label,
  start,
  end,
  handleChangePress,
  length,
}) => (
  <SlideSelectContainer onMouseUp={() => handleChangePress(0)}>
    <Label>{label}</Label>
    <Line length={length}>
      <Circle
        value={start}
        onMouseDown={() => handleChangePress(1)}
      />
      <Circle
        value={end}
        onMouseDown={() => handleChangePress(2)}
      />
    </Line>
  </SlideSelectContainer>
);

SlideSelect.propTypes = {
  label: string.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  handleChangePress: func.isRequired,
  length: number.isRequired,
};

const enhance = compose(
  withStateHandlers(
    {
      start: 0,
      end: 5,
      isPressed: 0,
    },
    {
      handleChangeValues: ({ start, end, isPressed }) => (e, length) => {
        if (isPressed === 1) {
          let newValue = Math.round(((e.screenX) - 142) / INTERVALE);
          if (newValue < 0) {
            newValue = 0;
          } else if (newValue >= end) {
            newValue = end - 1;
          }
          return ({ start: newValue <= length ? newValue : start });
        } else if (isPressed === 2) {
          let newValue = Math.round(((e.screenX) - 142) / INTERVALE);
          if (newValue < 0) {
            newValue = 0;
          } else if (newValue <= start) {
            newValue = start + 1;
          }
          return ({ end: newValue <= length ? newValue : end });
        }
      },
      handleChangePress: () => value => ({ isPressed: value }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('mousemove', (e) => this.props.handleChangeValues(e, this.props.length), false);
      window.addEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.props.handleChangeValues, false);
      window.removeEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
  }),
);

export default enhance(SlideSelect);

