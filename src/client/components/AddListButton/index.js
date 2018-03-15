import React from 'react';
import { string, array, func, bool } from 'prop-types';
import { map } from 'lodash';
import { withStateHandlers, compose, lifecycle } from 'recompose';

import req from '../../request';
import {
  AddListButtonContainer,
  AddLogo,
  RemoveLogo,
} from './styles';

const propTypes = {
  movieId: string.isRequired,
  myList: array.isRequired,
  handleChangeisAdded: func.isRequired,
  isAdded: bool.isRequired,
};

const getIsAdded = (id, list) => {
  let isContain = false;
  map(list, movieId => {
    if (movieId === id) {
      isContain = true;
    }
    return movieId;
  });
  return isContain;
};

const AddListButton = ({
  movieId,
  isAdded,
  handleChangeisAdded,
}) => (
  <AddListButtonContainer
    onClick={() => {
      if (!isAdded) {
        req.addMovieMylist('my_list', movieId)
          .then(() => handleChangeisAdded());
      } else {
        req.deleteMovieMylist('my_list', movieId)
          .then(() => handleChangeisAdded());
      }
    }}
  >
    {!isAdded ? <AddLogo /> : <RemoveLogo />}
    MA LISTE
  </AddListButtonContainer>
);

AddListButton.propTypes = propTypes;

export default compose(
  withStateHandlers(
    ({ initialState = false }) => ({
      isAdded: initialState,
    }),
    {
      handleChangeisAdded: ({ isAdded }) => () => ({ isAdded: !isAdded }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (getIsAdded(this.props.movieId, this.props.myList) && !this.props.isAdded) {
        this.props.handleChangeisAdded();
      }
    },
  }),
)(AddListButton);
