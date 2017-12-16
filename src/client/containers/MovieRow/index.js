import React from 'react';
import PropTypes from 'prop-types';

import { MovieRowContainer, MovieRowContent } from './styles';
import MoviePreview from './MoviePreview';
import ScrollBar from './ScrollBar';

const MovieRow = ({
  movies = fakeMovies,
  start,
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
          handleGoLeft={handleGoLeft}
          handleGoRight={handleGoRight}
        />))}
    </MovieRowContainer>
    <ScrollBar start={start} length={movies.length}/>
  </MovieRowContent>
);

MovieRow.propTypes = {
  movies: PropTypes.array,
  start: PropTypes.number.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
};

export default MovieRow;
