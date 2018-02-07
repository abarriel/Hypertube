import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';

import {
  resetMovies,
  changeParams,
} from '../../actions/movies';
import {
  getGenres,
} from '../../selectors/movies';
import {
  GenresWrapperContainer,
  GenresWrapperOverlay,
  Genre,
} from './styles';

const GenresWrapper = ({
  genres,
  resetMovies,
  changeParams,
}) => (
  <GenresWrapperOverlay>
    <GenresWrapperContainer>
      {genres.map(genre => (
        <Genre
          key={uniqueId(genre)}
          onClick={() => {
            resetMovies();
            changeParams({ selectedGenre: genre });
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
  resetMovies: func.isRequired,
  changeParams: func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

const actions = { changeParams, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GenresWrapper);
