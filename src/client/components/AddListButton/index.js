import React from 'react';
import req from '../../request';

import {
  AddListButtonContainer,
  AddLogo,
} from './styles';

const AddListButton = ({ movieId }) => (
  <AddListButtonContainer onClick={() => {
  req.addMovieMylist('my_list', movieId);
  }} >
    <AddLogo />
    MA LISTE
  </AddListButtonContainer>
);

export default AddListButton;
