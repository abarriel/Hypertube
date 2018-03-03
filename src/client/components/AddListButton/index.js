import React from 'react';
import { string } from 'prop-types';

import req from '../../request';
import {
  AddListButtonContainer,
  AddLogo,
} from './styles';

const propTypes = {
  movieId: string.isRequired,
};

const AddListButton = ({ movieId }) => (
  <AddListButtonContainer
    onClick={() => {
      req.addMovieMylist('my_list', movieId);
    }}
  >
    <AddLogo />
    MA LISTE
  </AddListButtonContainer>
);

AddListButton.propTypes = propTypes;

export default AddListButton;
