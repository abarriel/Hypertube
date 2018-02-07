import React from 'react';
import { withStateHandlers, compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  func,
  bool,
  string,
  array,
} from 'prop-types';

import {
  GenresButtonContainer,
  Text,
  Chev,
  Cross,
} from './styles';
import {
  resetMovies,
  changeParams,
} from '../../actions/movies';
import { getGenres } from '../../selectors/movies';
import GenresWrapper from './GenresWrapper';

const GenresButton = ({
  handleChangeWrapped,
  wrapped,
  selectedGenre,
  genres,
  resetMovies,
  changeParams,
}) => (
  <GenresButtonContainer onClick={() => handleChangeWrapped()}>
    <Text>{selectedGenre || 'Genres'}</Text>
    <Cross
      canreset={(selectedGenre.length > 0).toString()}
      onClick={() => {
        resetMovies();
        handleChangeWrapped();
        changeParams({
          selectedGenre: '',
        });
      }}
    />
    <Chev />
    {!wrapped &&
      <GenresWrapper
        genres={genres}
        resetMovies={resetMovies}
        changeParams={changeParams }
      />
    }
  </GenresButtonContainer>
);

GenresButton.propTypes = {
  handleChangeWrapped: func.isRequired,
  wrapped: bool.isRequired,
  selectedGenre: string.isRequired,
  genres: array.isRequired,
  resetMovies: func.isRequired,
  changeParams: func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

const actions = { changeParams, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      wrapped: true,
    },
    {
      handleChangeWrapped: ({ wrapped }) => () => ({ wrapped: !wrapped }),
    },
  ),
)(GenresButton);
