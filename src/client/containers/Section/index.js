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

const goLeft = start => start - 2 >= 0 ? start - 1 : 0;

const goRight = (start, length, end) => {
  const newStart = start + 1;
  if (newStart + end > length + 1) {
    return start;
  }
  return newStart;
};

const getEnd = width => Math.round(width / (WIDTH + (2 * MARGIN)));

const Section = ({
  movies,
  title,
  start,
  width,
  handleGoLeft,
  handleGoRight,
}) => (
  <SectionContainer>
    <TitleContainer>
      <Title>{title}</Title>
      <LeftArrow onClick={() => handleGoLeft(goLeft(start))} />
      <RightArrow onClick={() => handleGoRight(goRight(start, movies.length, getEnd(width)))} />
    </TitleContainer>
    <MovieRow
      start={start}
      width={width}
      end={getEnd(width)}
      handleGoLeft={handleGoLeft}
      handleGoRight={handleGoRight}
      movies={movies}
    />
  </SectionContainer>
);

Section.propTypes = {
  movies: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
};

const enhance = compose(
  withStateHandlers(
    {
      start: 0,
      width: 0,
    },
    {
      handleGoLeft: () => newStart => ({ start: newStart }),
      handleGoRight: () => newStart => ({ start: newStart }),
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
