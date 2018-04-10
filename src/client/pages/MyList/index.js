import React from 'react';
import {
  array,
  object,
  string,
  func,
  bool,
} from 'prop-types';
import { map, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
  MyListContainer,
  Title,
  MoviePreviewContainer,
  MoviePreviewContent,
} from './styles';
import EmptyList from './EmptyList';
import MoviePreview from '../../components/MoviePreview';
import MovieDetails from '../../containers/MovieDetails';
import Spinner from '../../components/Spinner';
import { getReqParams } from '../../selectors/movies';
import { getUserList } from '../../selectors/user';
import req from '../../request';
import { MOVIE_PREVIEW_HEIGHT } from '../../constants';

const propTypes = {
  movies: array.isRequired,
  reqParams: object,
  previewOpen: string,
  detailsData: object,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  resetDetailsData: func.isRequired,
  isFetching: bool.isRequired,
};

const MyList = ({
  movies,
  reqParams,
  previewOpen,
  detailsData,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  resetDetailsData,
  isFetching,
}) => (
  <MyListContainer>
    <Title>My List</Title>
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
            height={previewOpen === movie.imdbId ? MOVIE_PREVIEW_HEIGHT : 0}
            detailsData={detailsData}
            imdbId={movie.imdbId}
            resetDetailsData={resetDetailsData}
          />
        </MoviePreviewContent>
      ))
    }
      {movies.length === 0 && !isFetching && <EmptyList />}
      {isFetching && <Spinner />}
    </MoviePreviewContainer>
  </MyListContainer>
);

MyList.propTypes = propTypes;

const mapStateToProps = state => ({
  reqParams: getReqParams(state),
  userList: getUserList(state),
});

const enhance = compose(

  connect(mapStateToProps),
  withStateHandlers(
    {
      previewOpen: null,
      detailsData: null,
      isFetching: true,
      movies: [],
    },
    {
      handleChangeIsPreviewOpen: () => openedPreview => ({ previewOpen: openedPreview }),
      loadDetailsData: () => data => ({ detailsData: data }),
      resetDetailsData: () => () => ({ detailsData: null }),
      loadMovies: () => newMovies => ({ movies: newMovies }),
      handleChangeIsFetching: ({ isFetching }) => () => ({ isFetching: !isFetching }),
    },
  ),
  lifecycle({
    componentDidMount() {
      req.getMylist('my_list')
        .then(movies => {
          this.props.loadMovies(movies);
          this.props.handleChangeIsFetching();
        })
        .catch(() => this.props.handleChangeIsFetching());
    },
  }),
);

export default enhance(MyList);
