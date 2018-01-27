import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { Debounce } from 'react-throttle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  bool,
  func,
  string,
  number,
  array,
} from 'prop-types';

import req from '../../request';
import {
  getMovies,
  getMoviesCount,
  getSelectedGenre,
} from '../../selectors/movies';
import {
  SearchBarContainer,
  SearchLogo,
  SearchBox,
  SearchInput,
} from './styles';
import {
  addMovies,
  resetMovies,
} from '../../actions/movies';

const search = (value, addMovies, resetMovies, movies, moviesCount, selectedGenre) =>
  req.movies({ limit: 25, offset: moviesCount, genres: selectedGenre, years: '', ratings: '', q: value })
    .then(data => {
      resetMovies();
      addMovies(data)
    });

const SearchBar = ({
  wrapped,
  value,
  handleChangeWrapped,
  handleChangevalue,
  addMovies,
  movies,
  moviesCount,
  selectedGenre,
  resetMovies,
}) => (
  <SearchBarContainer>
    <SearchBox wrapped={wrapped}>
      <SearchLogo onClick={() => handleChangeWrapped()} />
      {!wrapped &&
        <Debounce time="400" handler="onChange">
          <SearchInput onChange={e => search(e.target.value, addMovies, resetMovies, movies, moviesCount, selectedGenre)} />
        </Debounce>
      }
    </SearchBox>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  wrapped: bool.isRequired,
  value: string.isRequired,
  handleChangeWrapped: func.isRequired,
  handleChangevalue: func.isRequired,
  addMovies: func.isRequired,
  movies: array.isRequired,
  moviesCount: number.isRequired,
  selectedGenre: string.isRequired,
  resetMovies: func.isRequired,
};

const actions = { addMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  moviesCount: getMoviesCount(state),
  selectedGenre: getSelectedGenre(state),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
      value: '',
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
      handleChangevalue: () => value => ({ value }),
    },
  ),
)(SearchBar);
