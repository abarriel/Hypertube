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
  handleGoLeft,
  handleGoRight,
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
          handleGoLeft={handleGoLeft}
          handleGoRight={handleGoRight}
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
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
};

export default MovieRow;
