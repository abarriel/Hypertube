import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { getMovies } from '../../selectors/movies';
import { MoviesContainer } from './styles';
import MoviePreview from '../../components/MoviePreview';

const Movies = ({ movies }) => (
  <MoviesContainer>
    {map(movies, movie => <MoviePreview key={movie.imdbId} movie={movie} />)}
  </MoviesContainer>
);

Movies.propTypes = {
  movies: array.isRequired,
};

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(Movies);
