import React from 'react';
import {
  func,
  number,
} from 'prop-types';

import {
  MovieDetailsContainer,
  FakeMovieDetailsContainer,
  Closer,
} from './styles';

const MovieDetails = ({
  handleChangeIsPreviewOpen,
  height,
}) => (
  <FakeMovieDetailsContainer height={height}>
    <MovieDetailsContainer height={height}>
    </MovieDetailsContainer>
    {height !== 0 && <Closer onClick={() => handleChangeIsPreviewOpen()} />}
  </FakeMovieDetailsContainer>
);

MovieDetails.propTypes = {
  handleChangeIsPreviewOpen: func.isRequired,
  height: number.isRequired,
};

export default MovieDetails;
