import React from 'react';
import PropTypes from 'prop-types';

import { MovieRowContainer, MovieRowContent } from './styles';
import MoviePreview from './MoviePreview';
import ScrollBar from './ScrollBar';

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
      {movies.map(movie =>
        (<MoviePreview
          key={movie.id}
          movie={movie}
          start={start}
          end={end}
          move={move}
          length={movies.length}
        />))}
    </MovieRowContainer>
    <ScrollBar
      start={start}
      length={movies.length}
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

export default MovieRow