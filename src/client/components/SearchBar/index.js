import React from 'react';
import { withStateHandlers } from 'recompose';
import { string, func} from 'prop-types';

import {
  SearchBarStyled,
  SearchIcon,
  SearchBarInput,
} from './styles';

const SearchBar = ({
  value,
  handleChangeValue,
}) => (
  <SearchBarStyled>
    <SearchBarInput spellcheck="false" onChange={e => handleChangeValue(e.target.value)} />
    <SearchIcon />
    {console.log('Search value: ', value)}
  </SearchBarStyled>
);

SearchBar.propTypes = {
  value: string.isRequired,
  handleChangeValue: func.isRequired,
};

const enhance = withStateHandlers(
  {
    value: '',
  },
  {
    handleChangeValue: () => value => ({ value }),
  },
);

export default enhance(SearchBar);
