import React from 'react';
import { connect } from 'react-redux';
import { withStateHandlers, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { string, func } from 'prop-types';

import { updateSearchMovies } from '../../actions/movies';
import {
  SearchBarStyled,
  SearchIcon,
  SearchBarInput,
} from './styles';

const SearchBar = ({
  value,
  handleChangeValue,
  updateSearchMovies,
}) => (
  <SearchBarStyled >
    <SearchBarInput spellcheck="false" onChange={e => handleChangeValue(e.target.value)} />
    <SearchIcon onClick={() => updateSearchMovies(value)} />
  </SearchBarStyled>
);

SearchBar.propTypes = {
  value: string.isRequired,
  handleChangeValue: func.isRequired,
  updateSearchMovies: func.isRequired,
};

const actions = { updateSearchMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    {
      value: '',
    },
    {
      handleChangeValue: () => value => ({ value }),
    },
  ),
);

export default enhance(SearchBar);
