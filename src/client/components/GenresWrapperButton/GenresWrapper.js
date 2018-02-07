import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { uniqueId } from 'lodash';

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

export default GenresWrapper;
