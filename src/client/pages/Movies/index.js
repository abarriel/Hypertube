import React from 'react';
import {
  array,
  func,
  object,
  bool,
  string,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { map } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';
import { compose, lifecycle, withStateHandlers } from 'recompose';

import {
  getMovies,
  getReqParams,
  getIsFetchPossible,
  getIsSearchEmpty,
} from '../../selectors/movies';
import {
  MoviesContainer,
  MoviePreviewContainer,
  ParamsContainer,
  Title,
  MoviePreviewContent,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import Spinner from '../../components/Spinner';
import GenresWrapperButton from '../../components/GenresWrapperButton';
import RatingWrapperButton from '../../components/RatingWrapperButton';
import YearsWrapperButton from '../../components/YearsWrapperButton';
import EmptySearch from '../../components/EmptySearch';
import MovieDetails from '../../containers/MovieDetails';
import req from '../../request';
import {
  addMovies,
  resetMovies,
  resetMoviesParams,
} from '../../actions/movies';

const onChange = (isVisible, addMovies, reqParams) => {
  if (isVisible) {
    let body = {
      limit: 25,
      offset: reqParams.count,
      genres: reqParams.genres,
      ratings: reqParams.ratings,
      years: reqParams.years,
    };
    if (reqParams.q.length > 0) {
      body = {
        ...body,
        q: reqParams.q,
      };
    }
    req.movies({
      ...body,
    })
      .then(movies => addMovies(movies));
  }
};

const Movies = ({
  movies,
  addMovies,
  reqParams,
  isFetchPossible,
  isEmptySearch,
  previewOpen,
  detailsData,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  resetDetailsData,
}) => (
  <MoviesContainer>
    <ParamsContainer>
      <Title>Films</Title>
      <GenresWrapperButton selectedGenre={reqParams.genres} />
      <RatingWrapperButton />
      <YearsWrapperButton />
    </ParamsContainer>
    <MoviePreviewContainer>
      {map(movies, (movie, index) => (
        <MoviePreviewContent key={movie.imdbId}>
          <MoviePreview
            moviesCount={reqParams.count}
            pos={index}
            movie={movie}
            handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
            loadDetailsData={loadDetailsData}
          />
          <MovieDetails
            handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
            height={previewOpen === movie.imdbId ? 50 : 0}
            detailsData={detailsData}
            imdbId={movie.imdbId}
            resetDetailsData={resetDetailsData}
          />
        </MoviePreviewContent>
      ))
    }
      {isEmptySearch && movies.length === 0 && <EmptySearch value={reqParams.q} />}
    </MoviePreviewContainer>
    {isFetchPossible &&
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
  isFetchPossible: bool.isRequired,
  isEmptySearch: bool.isRequired,
  previewOpen: string,
  detailsData: object,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  resetDetailsData: func.isRequired,
};

const actions = { addMovies, resetMovies, resetMoviesParams };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  reqParams: getReqParams(state),
  isFetchPossible: getIsFetchPossible(state),
  isEmptySearch: getIsSearchEmpty(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillUnmount() {
      this.props.resetMovies();
      this.props.resetMoviesParams();
    },
  }),
  withStateHandlers(
    {
      previewOpen: null,
      detailsData: null,
    },
    {
      handleChangeIsPreviewOpen: ({ previewOpen }) => openedPreview => ({ previewOpen: openedPreview }),
      loadDetailsData: () => data => ({ detailsData: data }),
      resetDetailsData: () => () => ({ detailsData: null }),
    },
  ),
);

export default enhance(Movies);
