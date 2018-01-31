import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import { map } from 'lodash';
import {
  array,
  number,
} from 'prop-types';
import {
  RecentsContainer,
  MoviePreviewContainer,
} from './styles';
import {
  getRecentMovies,
  getMoviesCount,
} from '../../selectors/movies';
import {
  loadRecentMovies,
  resetMovies,
} from '../../actions/movies';
import req from '../../request';
import MoviePreview from '../../components/MoviePreview';

const Recents = ({
  recentMovies,
  moviesCount,
}) => (
  <RecentsContainer>
    <MoviePreviewContainer>
      {map(recentMovies, (movie, index) => <MoviePreview key={movie.imdbId} moviesCount={moviesCount} pos={index} movie={movie} />)}
    </MoviePreviewContainer>
  </RecentsContainer>
);

Recents.propTypes = {
  recentMovies: array.isRequired,
  moviesCount: number.isRequired,
};

const actions = { loadRecentMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  recentMovies: getRecentMovies(state),
  moviesCount: getMoviesCount(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      req.movies({ limit: 25, offset: 10 })
        .then(movies => this.props.loadRecentMovies(movies));
    },
    componentWillUnmount() {
      this.props.resetMovies();
    },
  }),
);

export default enhance(Recents);
