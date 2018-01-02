import React from 'react';
import { withStateHandlers } from 'recompose';
import { array, func } from 'prop-types';

import {
  CheckBoxSelectContainer,
  CheckBoxElem,
  CheckBoxElemLabel,
} from './styles';
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

const isChecked = (label, checked) => {
  let value = false;
  checked.map(elem => {
    if (elem === label) {
      value = true;
    }
    return elem;
  })
  return value;
};

const CheckBoxSelect = ({ checked, handleChangeChecked }) => (
  <CheckBoxSelectContainer>
    <CheckBoxElem>
      <CheckBoxElemLabel>Genre</CheckBoxElemLabel>
      {genres.map(genre => (
        <CheckBox
          key={genre.id}
          label={genre.label}
          isChecked={isChecked(genre.label, checked)}
          handleChangeChecked={handleChangeChecked}
        />
      ))}
    </CheckBoxElem>
  </CheckBoxSelectContainer>
);

CheckBoxSelect.propTypes = {
  checked: array.isRequired,
  handleChangeChecked: func.isRequired,
};

const enhance = withStateHandlers(
  {
    checked: [],
  },
  {
    handleChangeChecked: ({ checked }) => label => {
      if (label === 'All') {
        return ({ checked: [label] });
      }
      return ({ checked: [...checked, label] });
    },
  },
);

export default enhance(CheckBoxSelect);
