import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  SelectedLine,
} from './styles';
import { updateFilterMovies } from '../../actions/movies';

const getCircleLabel = (label, value) => {
  if (label === 'Year') {
    return (1900 + (value * 10));
  }
  return value;
};

const SlideSelect = ({
  label,
  interval,
  start,
  end,
  handleChangePress,
  length,
  isPressed,
  updateFilterMovies,
}) => (
  <SlideSelectContainer>
    <Label>{label}</Label>
    <Line length={length} interval={interval}>
      <Circle
        value={start}
        interval={interval}
        isPressed={isPressed === 1}
        onMouseDown={() => handleChangePress(1)}
      >
        <CircleLabel>{getCircleLabel(label, start)}</CircleLabel>
      </Circle>
      <SelectedLine
        start={start}
        end={end}
        interval={interval}
      />
      <Circle
        value={end}
        interval={interval}
        isPressed={isPressed === 2}
        onMouseDown={() => handleChangePress(2)}
      >
        <CircleLabel>{getCircleLabel(label, end)}</CircleLabel>
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
  isPressed: number.isRequired,
  updateFilterMovies: func.isRequired,
};

const actions = { updateFilterMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(null, mapDispatchToProps),
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
          }
          return ({ start: newValue <= length && newValue < end ? newValue : start });
        } else if (isPressed === 2) {
          let newValue = Math.round(((e.screenX) - 142) / interval);
          if (newValue < 0) {
            newValue = 0;
          }
          return ({ end: newValue <= length && newValue > start ? newValue : end });
        }
      },
      handleChangePress: () => value => ({ isPressed: value }),
    },
  ),
  lifecycle({
    componentWillReceiveProps() {
      if (this.props.isPressed !== 0) {
        this.props.updateFilterMovies({ by: this.props.label, from: this.props.start, to: this.props.end });
      }
    },
    componentWillMount() {
      window.addEventListener('mousemove', (e) => this.props.handleChangeValues(e, this.props.length, this.props.interval), false);
      window.addEventListener('mouseup', () => this.props.handleChangePress(0), false);
    },
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.props.handleChangeValues, false);
      window.addEventListener('mouseup', () => this.props.updateFilterMovies('test'), false);
    },
  }),
);

export default enhance(SlideSelect);

