import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { getMovies } from '../../selectors/movies';
import {
  MoviesContainer,
  MoviePreviewContainer,
  ParamsContainer,
  SlideSelectContainer,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import SlideSelect from '../../components/SlideSelect';
import ProfilMenu from '../../containers/ProfilMenu';

const Movies = ({ movies }) => (
  <MoviesContainer>
    <ProfilMenu />
    <ParamsContainer>
      <SearchBar />
      <SlideSelectContainer>
        <SlideSelect label="Note" length={5} interval={100} />
        <SlideSelect label="Year" length={12} interval={30} />
      </SlideSelectContainer>
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
