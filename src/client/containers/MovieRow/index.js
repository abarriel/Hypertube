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
};

export default MovieRow;
