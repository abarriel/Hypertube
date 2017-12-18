import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
  TitleContainer,
  Title,
  SectionContainer,
  RightArrow,
  LeftArrow,
} from './styles';
import MovieRow from '../MovieRow';
import { WIDTH, MARGIN } from '../MovieRow/constants';

const goLeft = start => start - 1 >= 0 ? -1 : 0;

const goRight = (start, length, end) => {
  const newStart = start + 1;
  if (newStart + end > length + 1) {
    return 0;
  }
  return 1;
};

const getEnd = width => Math.round((width - 25) / (WIDTH + (2 * MARGIN)));

const Section = ({
  movies,
  title,
  start,
  width,
  handleGoLeft,
  handleGoRight,
  move,
}) => (
  <SectionContainer>
    <TitleContainer>
      <Title>{title}</Title>
      <LeftArrow onClick={() => move(goLeft(start))} />
      <RightArrow onClick={() => move(goRight(start, movies.length, getEnd(width)))} />
    </TitleContainer>
    <MovieRow
      start={start}
      width={width}
      end={getEnd(width)}
      movies={movies}
      move={move}
    />
  </SectionContainer>
);

Section.propTypes = {
  movies: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
};

const enhance = compose(
  withStateHandlers(
    {
      start: 0,
      width: 0,
    },
    {
      move: ({ start }) => direction => ({ start: start + direction }),
      updateWindowDimensions: () => () => ({ width: window.innerWidth }),
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.updateWindowDimensions();
      window.addEventListener('resize', this.props.updateWindowDimensions);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWindowDimensions);
    },
  }),
);

export default enhance(Section);
