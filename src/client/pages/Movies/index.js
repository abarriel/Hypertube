import React from 'react';
import {
  array,
  func,
  number,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';
import { compose, lifecycle } from 'recompose';

import {
  getMovies,
  getMoviesCount,
} from '../../selectors/movies';
import {
  MoviesContainer,
  MoviePreviewContainer,
  ParamsContainer,
  Title,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import Spinner from '../../components/Spinner';
import ParamsWrapperButton from '../../components/ParamsWrapperButton';
import { reqMovies } from '../../request';
import { addMovies, resetMovies } from '../../actions/movies';

const onChange = (isVisible, addMovies, moviesCount) => {
  if (isVisible) {
    reqMovies(20, moviesCount)
      .then(movies => addMovies(movies))
      .catch(err => console.log('error: ', err));
  }
};

const Movies = ({
  movies,
  moviesCount,
  addMovies,
}) => (
  <MoviesContainer>
    <ParamsContainer>
      <Title>Films</Title>
      <ParamsWrapperButton />
    </ParamsContainer>
    <MoviePreviewContainer>
      {map(movies, (movie, index) => <MoviePreview key={movie.imdbId} moviesCount={moviesCount} pos={index} movie={movie} />)}
    </MoviePreviewContainer>
    <VisibilitySensor onChange={isVisible => onChange(isVisible, addMovies, moviesCount)}>
      <Spinner />
    </VisibilitySensor>
  </MoviesContainer>
);

Movies.propTypes = {
  movies: array.isRequired,
  moviesCount: number.isRequired,
  addMovies: func.isRequired,
};

const actions = { addMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  moviesCount: getMoviesCount(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillUnmount() {
      this.props.resetMovies();
    },
  }),
);

export default enhance(Movies);
