import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { array, func } from 'prop-types';
import { without } from 'lodash';

import {
  CheckBoxSelectContainer,
  CheckBoxElem,
  CheckBoxElemLabel,
} from './styles';
import { updateFilterMovies } from '../../actions/movies';
import CheckBox from './CheckBox';

const genres = [
  {
    id: 0,
    label: 'All',
  },
  {
    id: 1,
    label: 'Fiction',
  },
  {
    id: 2,
    label: 'Action',
  },
  {
    id: 3,
    label: 'Animation',
  },
  {
    id: 4,
    label: 'Aventure',
  },
  {
    id: 5,
    label: 'Comédie',
  },
];

const ischeck = (label, checked) => {
  let value = false;
  checked.map(elem => {
    if (elem === label) {
      value = true;
    }
  });
  return value;
};

const CheckBoxSelect = ({
  checked,
  handleChangeChecked,
  updateFilterMovies,
}) => (
  <CheckBoxSelectContainer>
    <CheckBoxElem>
      <CheckBoxElemLabel>Genre</CheckBoxElemLabel>
      {genres.map(genre => (
        <CheckBox
          key={genre.id}
          label={genre.label}
          ischeck={ischeck(genre.label, checked)}
          handleChangeChecked={handleChangeChecked}
          updateFilterMovies={updateFilterMovies}
        />
      ))}
    </CheckBoxElem>
  </CheckBoxSelectContainer>
);

CheckBoxSelect.propTypes = {
  checked: array.isRequired,
  handleChangeChecked: func.isRequired,
  updateFilterMovies: func.isRequired,
};

const actions = { updateFilterMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    {
      checked: [],
    },
    {
      handleChangeChecked: ({ checked }) => (label, wasChecked) => {
        if (label === 'All') {
          return ({ checked: [label] });
        }
        if (!wasChecked) {
          return ({ checked: without([...checked, label], 'All') });
        }
        return ({ checked: without(checked, 'All', label) });
      },
    },
  ),
);

export default enhance(CheckBoxSelect);
