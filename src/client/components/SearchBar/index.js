import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { Debounce } from 'react-throttle';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  bool,
  func,
  string,
  array,
} from 'prop-types';

import req from '../../request';
import {
  getMovies,
  getSelectedGenre,
} from '../../selectors/movies';
import {
  SearchBarContainer,
  SearchLogo,
  SearchBox,
  SearchInput,
  Cross,
} from './styles';
import {
  resetMovies,
  changeParams,
} from '../../actions/movies';

const search = (value, resetMovies, changeParams) => {
  changeParams({ q: value });
  resetMovies();
};

const SearchBar = ({
  wrapped,
  handleChangeWrapped,
  movies,
  selectedGenre,
  resetMovies,
  changeParams,
}) => (
  <SearchBarContainer>
    <SearchBox wrapped={wrapped}>
      <SearchLogo onClick={() => handleChangeWrapped()} />
      {!wrapped &&
        <Debounce time="400" handler="onKeyDown">
          <SearchInput onKeyDown={e => search(e.target.value, resetMovies, changeParams)} />
        </Debounce>
      }
      {!wrapped && <Cross />}
    </SearchBox>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  wrapped: bool.isRequired,
  handleChangeWrapped: func.isRequired,
  movies: array.isRequired,
  selectedGenre: string.isRequired,
  resetMovies: func.isRequired,
  changeParams: func.isRequired,
};

const actions = { resetMovies, changeParams };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  movies: getMovies(state),
  selectedGenre: getSelectedGenre(state),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
    },
  ),
)(SearchBar);
