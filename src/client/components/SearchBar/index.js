import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  bool,
  func,
  string,
  array,
} from 'prop-types';

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
  Closer,
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
  value,
  handleChangeWrapped,
  handleChangeValue,
  resetMovies,
  changeParams,
}) => (
  <SearchBarContainer>
    {!wrapped && value.length === 0 && <Closer onClick={() => handleChangeWrapped()} />}
    <SearchBox wrapped={wrapped}>
      <SearchLogo
        onClick={() => {
          if (wrapped) handleChangeWrapped();
          else search(value, resetMovies, changeParams);
        }}
      />
      {!wrapped &&
        <SearchInput
          value={value}
          onChange={e => {
              handleChangeValue(e.target.value);
            }
          }
          onKeyPress={e => { if (e.key === 'Enter') search(value, resetMovies, changeParams); }}
        />
      }
      {!wrapped && value.length > 0 &&
        <Cross
          onClick={() => {
          changeParams({ q: '' });
          resetMovies();
          handleChangeValue('');
          }}
        />
        }
    </SearchBox>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  wrapped: bool.isRequired,
  value: string.isRequired,
  handleChangeValue: func.isRequired,
  handleChangeWrapped: func.isRequired,
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
      value: '',
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
      handleChangeValue: () => newValue => ({ value: newValue }),
    },
  ),
)(SearchBar);
