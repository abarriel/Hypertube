import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import {
  number,
  func,
  bool,
} from 'prop-types';

import { INTERVALE } from './constants';
import {
  SlideSelectContainer,
  Line,
  Circle,
} from './styles';

const SlideSelect = ({
  value,
  handleChangePress,
  length,
}) => (
  <SlideSelectContainer onMouseUp={() => handleChangePress(false)}>
    <Line length={length}>
      <Circle
        value={value}
        onMouseDown={() => handleChangePress(true)}
      />
    </Line>
  </SlideSelectContainer>
);

SlideSelect.propTypes = {
  value: number.isRequired,
  handleChangePress: func.isRequired,
  length: number.isRequired,
};

const enhance = compose(
  withStateHandlers(
    {
      value: 3,
      isPressed: false,
    },
    {
      handleChangeValue: ({ value, isPressed }) => (e, length) => {
        if (isPressed) {
          let newValue = Math.round(((e.screenX) - 142) / INTERVALE);
          if (newValue < 0) {
            newValue = 0;
          }
          return ({ value: newValue <= length ? newValue : value });
        }
      },
      handleChangePress: () => value => ({ isPressed: value }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('mousemove', (e) => this.props.handleChangeValue(e, this.props.length), false);
      window.addEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.props.handleChangeValue, false);
      window.removeEventListener('mouseup', () => this.props.handleChangePress(false), false);
    },
  }),
);

export default enhance(SlideSelect);

