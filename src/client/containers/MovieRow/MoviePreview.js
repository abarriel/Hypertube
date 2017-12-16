import React from 'react';
import PropTypes from 'prop-types';

import { MoviePreviewContainer } from './styles';

const MoviePreview = ({
  movie,
}) => (
  <MoviePreviewContainer
    coverImage={movie.coverImage}
  >
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviePreview;
