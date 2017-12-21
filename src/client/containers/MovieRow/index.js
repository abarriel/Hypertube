import React from 'react';
import PropTypes from 'prop-types';

import { MovieRowContainer, MovieRowContent } from './styles';
import MoviePreview from './MoviePreview';
import ScrollBar from './ScrollBar';

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
}) => (
  <MovieRowContent>
    <MovieRowContainer
      margin={-start}
    >
      {movies.map((movie, index) =>
        (<MoviePreview
          key={movie.imdbId}
          movie={movie}
          start={start}
          end={end}
          move={move}
          length={getMoviesLength(movies)}
          index={index}
        />))}
    </MovieRowContainer>
    <ScrollBar
      start={start}
      length={getMoviesLength(movies)}
      end={end}
      width={width}
    />
  </MovieRowContent>
);

MovieRow.propTypes = {
  movies: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
};

export default MovieRow;
