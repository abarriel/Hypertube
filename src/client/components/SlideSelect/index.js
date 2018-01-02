import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import {
  number,
  func,
  string,
} from 'prop-types';

import {
  SlideSelectContainer,
  Line,
  Circle,
  Label,
  CircleLabel,
} from './styles';

const SlideSelect = ({
  label,
  interval,
  start,
  end,
  handleChangePress,
  length,
}) => (
  <SlideSelectContainer onMouseUp={() => handleChangePress(0)}>
    <Label>{label}</Label>
    <Line length={length} interval={interval}>
      <Circle
        value={start}
        interval={interval}
        onMouseDown={() => handleChangePress(1)}
      >
        <CircleLabel>{start}</CircleLabel>
      </Circle>
      <Circle
        value={end}
        interval={interval}
        onMouseDown={() => handleChangePress(2)}
      >
        <CircleLabel>{end}</CircleLabel>
      </Circle>
    </Line>
  </SlideSelectContainer>
);

SlideSelect.propTypes = {
  label: string.isRequired,
  interval: number.isRequired,
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
      handleChangeValues: ({ start, end, isPressed }) => (e, length, interval) => {
        if (isPressed === 1) {
          let newValue = Math.round(((e.screenX) - 142) / interval);
          if (newValue < 0) {
            newValue = 0;
          } else if (newValue >= end) {
            newValue = end - 1;
          }
          return ({ start: newValue <= length ? newValue : start });
        } else if (isPressed === 2) {
          let newValue = Math.round(((e.screenX) - 142) / interval);
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
      window.addEventListener('mousemove', (e) => this.props.handleChangeValues(e, this.props.length, this.props.interval), false);
      window.addEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.props.handleChangeValues, false);
      window.removeEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
  }),
);

export default enhance(SlideSelect);

