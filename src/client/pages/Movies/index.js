import React from 'react';
import {
  array,
  func,
  number,
  string,
  object,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';
import { compose, lifecycle } from 'recompose';

import {
  getMovies,
  getReqParams,
} from '../../selectors/movies';
import {
  MoviesContainer,
  MoviePreviewContainer,
  ParamsContainer,
  Title,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import Spinner from '../../components/Spinner';
import GenresWrapperButton from '../../components/GenresWrapperButton';
import RatingWrapperButton from '../../components/RatingWrapperButton';
import req from '../../request';
import {
  addMovies,
  resetMovies,
} from '../../actions/movies';

const onChange = (isVisible, addMovies, reqParams) => {
  if (isVisible) {
    req.movies({ limit: 25, offset: reqParams.count, genres: reqParams.selectedGenre, rating: '' })
      .then(movies => addMovies(movies));
  }
};

const Movies = ({
  movies,
  addMovies,
  reqParams,
}) => (
  <MoviesContainer>
    <ParamsContainer>
      <Title>Films</Title>
      <GenresWrapperButton selectedGenre={reqParams.selectedGenre} />
      <RatingWrapperButton />
    </ParamsContainer>
    <MoviePreviewContainer>
      {map(movies, (movie, index) => <MoviePreview key={movie.imdbId} moviesCount={reqParams.count} pos={index} movie={movie} />)}
    </MoviePreviewContainer>
    {reqParams.q.length === 0 &&
      <VisibilitySensor onChange={isVisible => onChange(isVisible, addMovies, reqParams)}>
        <Spinner />
      </VisibilitySensor>
    }
  </MoviesContainer>
);

Movies.propTypes = {
  movies: array.isRequired,
  addMovies: func.isRequired,
  reqParams: object.isRequired,
};

const actions = { addMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  reqParams: getReqParams(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.resetMovies();
    },
  }),
);

export default enhance(Movies);
