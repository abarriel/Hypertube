import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import req from '../../request';
import {
  updateMovies,
  resetMovies,
  changeParams,
} from '../../actions/movies';
import { getGenres } from '../../selectors/movies';
import {
  GenresWrapperContainer,
  GenresWrapperOverlay,
  Genre,
} from './styles';

const GenresWrapper = ({
  genres,
  handleChangeWrapped,
  updateMovies,
  resetMovies,
  changeParams,
}) => (
  <GenresWrapperOverlay>
    <GenresWrapperContainer>
      {genres.map((genre, i) => (
        <Genre
          onClick={() => {
            changeParams({ selectedGenre: genre });
            req.movies({ limit: 25, offset: 0, genres: genre })
              .then(data => {
                resetMovies();
                updateMovies(data, genre);
              });
          }}
        >
          {genre.toLowerCase()}
        </Genre>
      ))}
    </GenresWrapperContainer>
  </GenresWrapperOverlay>
);

GenresWrapper.propTypes = {
  genres: array.isRequired,
  handleChangeWrapped: func.isRequired,
  resetMovies: func.isRequired,
  changeParams:func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

const actions = { changeParams, updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GenresWrapper);
