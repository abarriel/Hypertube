import React from 'react';
import { string, array, func, bool } from 'prop-types';
import { map, filter } from 'lodash';
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
  updateUserList: func.isRequired,
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
  myList,
  updateUserList,
}) => (
  <AddListButtonContainer
    onClick={() => {
      if (!isAdded) {
        req.addMovieMylist('my_list', movieId)
          .then(() => {
            updateUserList([...myList, movieId]);
            handleChangeisAdded();
          });
      } else {
        req.deleteMovieMylist('my_list', movieId)
          .then(() => {
            updateUserList(filter([...myList], id => id !== movieId));
            handleChangeisAdded();
          });
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
