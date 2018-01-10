import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  bool,
  func,
  string,
} from 'prop-types';

import {
  SearchBarContainer,
  SearchLogo,
  SearchBox,
  SearchInput,
} from './styles';

const SearchBar = ({
  wrapped,
  value,
  handleChangeWrapped,
  handleChangevalue,
}) => (
  <SearchBarContainer>
    <SearchBox wrapped={wrapped}>
      <SearchLogo onClick={() => handleChangeWrapped()} />
      {!wrapped && <SearchInput />}
    </SearchBox>
  </SearchBarContainer>
);

SearchBar.propTypes = {
  wrapped: bool.isRequired,
  value: string.isRequired,
  handleChangeWrapped: func.isRequired,
  handleChangevalue: func.isRequired,
};

export default withStateHandlers(
  {
    wrapped: true,
    value: '',
  },
  {
    handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
    handleChangevalue: () => value => ({ value }),
  },
)(SearchBar);
