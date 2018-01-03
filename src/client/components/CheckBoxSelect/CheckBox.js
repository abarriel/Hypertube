import React from 'react';
import { string, bool, func } from 'prop-types';

import {
  CheckBoxContainer,
  CheckBoxLabel,
  CheckBoxContent,
  CheckedIcon,
} from './styles';

const CheckBox = ({ label, ischeck, handleChangeChecked }) => (
  <CheckBoxContainer>
    <CheckBoxLabel>{label}</CheckBoxLabel>
    <CheckBoxContent onClick={() => handleChangeChecked(label, ischeck)}>
      <CheckedIcon ischeck={ischeck ? 1 : 0} />
    </CheckBoxContent>
  </CheckBoxContainer>
);

CheckBox.propTypes = {
  label: string.isRequired,
  ischeck: bool.isRequired,
  handleChangeChecked: func.isRequired,
};

export default CheckBox;
