import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import { MoviePreviewContainer, Shadow, Title } from './styles';

const MoviePreview = ({
  movie = {
    title: 'The Walking Dead',
  },
  displayShadow,
  showShadow,
  hideShadow,
}) => (
  <MoviePreviewContainer
    onMouseEnter={showShadow}
    onMouseLeave={hideShadow}
  >
    {displayShadow &&
      <Shadow>
        <Title>{movie.title}</Title>
      </Shadow>
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object,
  displayShadow: PropTypes.bool.isRequired,
  showShadow: PropTypes.func.isRequired,
  hideShadow: PropTypes.func.isRequired,
};

const enhance = withStateHandlers(
  {
    displayShadow: false,
  },
  {
    showShadow: () => () => ({ displayShadow: true }),
    hideShadow: () => () => ({ displayShadow: false }),
  },
);

export default enhance(MoviePreview);

