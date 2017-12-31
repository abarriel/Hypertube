import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { getMovies } from '../../selectors/movies';
import {
  MoviesContainer,
  MoviePreviewContainer,
  ParamsContainer,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import { SlideSelect } from '../../components/SlideSelect';

const Movies = ({ movies }) => (
  <MoviesContainer>
    <ParamsContainer>
      <SearchBar />
      <SlideSelect />
    </ParamsContainer>
    {movies.length > 0 && (
      <MoviePreviewContainer>
        {map(movies, movie => <MoviePreview key={movie.imdbId} movie={movie} />)}
      </MoviePreviewContainer>
    )}
    {movies.length <= 0 && <Spinner />}
  </MoviesContainer>
);

Movies.propTypes = {
  movies: array.isRequired,
};

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(Movies);
