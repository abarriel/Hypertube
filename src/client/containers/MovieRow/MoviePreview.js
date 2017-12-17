import React from 'react';
import PropTypes from 'prop-types';

import { MoviePreviewContainer } from './styles';

const MoviePreview = ({
  movie,
  handleGoLeft,
  handleGoRight,
  start,
}) => (
  <MoviePreviewContainer
    coverImage={movie.coverImage}
    hidden={movie.id >= start}
  >
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
  start: PropTypes.number.isRequired,
};

export default MoviePreview;
