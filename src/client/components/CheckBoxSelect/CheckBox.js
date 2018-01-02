import React from 'react';
import { string, bool, func } from 'prop-types';

import {
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBoxContent,
  CheckedIcon,
} from './styles';

const CheckBox = ({ label, isChecked, handleChangeChecked }) => (
  <CheckBoxContainer>
    <CheckBoxLabel>{label}</CheckBoxLabel>
    <CheckBoxContent onClick={() => handleChangeChecked(label)}>
      {isChecked && <CheckedIcon />}
    </CheckBoxContent>
  </CheckBoxContainer>
);

CheckBox.propTypes = {
  label: string.isRequired,
  isChecked: bool.isRequired,
  handleChangeChecked: func.isRequired,
};

export default CheckBox;
