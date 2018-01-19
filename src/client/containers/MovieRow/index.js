import React from 'react';
import {
  bool,
  array,
  number,
  func,
} from 'prop-types';
import { withStateHandlers } from 'recompose';

import { MovieRowContainer, MovieRowContent } from './styles';
import MoviePreview from './MoviePreview';
import ScrollBar from './ScrollBar';
import FakePreview from './FakePreview';
import Arrows from './Arrows';

const getMoviesLength = movies => {
  const { length } = movies;
  if (length === 0) {
    return 1;
  }
  return length;
};

const MovieRow = ({
  movies,
  start,
  end,
  width,
  move,
  isHover,
  handleChangeIsHover,
}) => (
  <MovieRowContent
    onMouseEnter={() => handleChangeIsHover()}
    onMouseLeave={() => handleChangeIsHover()}
  >
    <ScrollBar
      start={start}
      length={getMoviesLength(movies)}
      end={end}
      width={width}
      isHover={isHover}
    />
    <MovieRowContainer
      margin={-start}
    >
      {start !== 0 && <Arrows direction="left" move={move} />}
      {movies.length > 0 ? movies.map((movie, index) =>
        (<MoviePreview
          key={movie.imdbId}
          movie={movie}
          start={start}
          end={end}
          move={move}
          length={getMoviesLength(movies)}
          index={index}
        />)) :
      <FakePreview />}
      <Arrows direction="right" move={move} />
    </MovieRowContainer>
  </MovieRowContent>
);

MovieRow.propTypes = {
  movies: array.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  width: number.isRequired,
  move: func.isRequired,
  isHover: bool.isRequired,
  handleChangeIsHover: func.isRequired,
};

export default withStateHandlers(
  {
    isHover: false,
  },
  {
    handleChangeIsHover: ({ isHover }) => () => ({ isHover: !isHover }),
  },
)(MovieRow);
