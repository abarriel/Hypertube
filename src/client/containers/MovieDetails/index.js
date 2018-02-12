import React from 'react';
import {
  func,
} from 'prop-types';

import {
  MovieDetailsContainer,
  FakeMovieDetailsContainer,
} from './styles';

const MovieDetails = ({
  handleChangeIsPreviewOpen,
}) => (
  <FakeMovieDetailsContainer>
    <MovieDetailsContainer>
    </MovieDetailsContainer>
  </FakeMovieDetailsContainer>
);

MovieDetails.propTypes = {
  handleChangeIsPreviewOpen: func.isRequired,
};

export default MovieDetails;
