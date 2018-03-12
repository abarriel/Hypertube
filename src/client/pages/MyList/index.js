import React from 'react';
import {
  array,
  object,
  string,
  func,
} from 'prop-types';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import {
  MyListContainer,
  Title,
  MoviePreviewContainer,
  MoviePreviewContent,
} from './styles';
import MoviePreview from '../../components/MoviePreview';
import MovieDetails from '../../containers/MovieDetails';
import {
  getReqParams,
} from '../../selectors/movies';
import req from '../../request';

const propTypes = {
  movies: array.isRequired,
  reqParams: object,
  previewOpen: string,
  detailsData: object,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  resetDetailsData: func.isRequired,
};

const MyList = ({
  movies,
  reqParams,
  previewOpen,
  detailsData,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  resetDetailsData,
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
            height={previewOpen === movie.imdbId ? 50 : 0}
            detailsData={detailsData}
            imdbId={movie.imdbId}
            resetDetailsData={resetDetailsData}
          />
        </MoviePreviewContent>
      ))
    }
    </MoviePreviewContainer>
  </MyListContainer>
);

MyList.propTypes = propTypes;

const mapStateToProps = state => ({
  reqParams: getReqParams(state),
});

const enhance = compose(

  connect(mapStateToProps),
  withStateHandlers(
    {
      previewOpen: null,
      detailsData: null,
      movies: [],
    },
    {
      handleChangeIsPreviewOpen: () => openedPreview => ({ previewOpen: openedPreview }),
      loadDetailsData: () => data => ({ detailsData: data }),
      resetDetailsData: () => () => ({ detailsData: null }),
      loadMovies: () => newMovies => ({ movies: newMovies }),
    },
  ),
  lifecycle({
    componentWillMount() {
      req.getMylist(1)
        .then(movies => console.log('movies: ', movies));
    },
  }),
);

export default enhance(MyList);
