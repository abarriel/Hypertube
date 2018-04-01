import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { map } from 'lodash';
import {
  array,
  func,
  object,
  string,
} from 'prop-types';
import {
  RecentsContainer,
  MoviePreviewContainer,
  MoviePreviewContent,
} from './styles';
import {
  getRecentMovies,
} from '../../selectors/movies';
import {
  loadRecentMovies,
  resetMovies,
} from '../../actions/movies';
import req from '../../request';
import { MOVIE_PREVIEW_HEIGHT } from '../../constants';
import MoviePreview from '../../components/MoviePreview';
import MovieDetails from '../../containers/MovieDetails';

const Recents = ({
  recentMovies,
  previewOpen,
  detailsData,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  resetDetailsData,
}) => (
  <RecentsContainer>
    <MoviePreviewContainer>
      {map(recentMovies, (movie, index) => (
        <MoviePreviewContent key={movie.imdbId}>
          <MoviePreview
            moviesCount={50}
            pos={index}
            movie={movie}
            handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
            loadDetailsData={loadDetailsData}
          />
          <MovieDetails
            handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
            height={previewOpen === movie.imdbId ? MOVIE_PREVIEW_HEIGHT : 0}
            detailsData={detailsData}
            imdbId={movie.imdbId}
            resetDetailsData={resetDetailsData}
          />
        </MoviePreviewContent>
      ))}
    </MoviePreviewContainer>
  </RecentsContainer>
);

Recents.propTypes = {
  recentMovies: array.isRequired,
  previewOpen: string,
  detailsData: object,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  resetDetailsData: func.isRequired,
};

const actions = { loadRecentMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  recentMovies: getRecentMovies(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      req.movies({ limit: 50, offset: 0, years: 2017 })
        .then(movies => this.props.loadRecentMovies(movies));
    },
    componentWillUnmount() {
      this.props.resetMovies();
    },
  }),
  withStateHandlers(
    {
      previewOpen: null,
      detailsData: null,
    },
    {
      handleChangeIsPreviewOpen: () => openedPreview => ({ previewOpen: openedPreview }),
      loadDetailsData: () => data => ({ detailsData: data }),
      resetDetailsData: () => () => ({ detailsData: null }),
    },
  ),
);

export default enhance(Recents);
