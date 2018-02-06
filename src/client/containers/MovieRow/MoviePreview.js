import React from 'react';
import { number, func, object, bool } from 'prop-types';
import { withStateHandlers } from 'recompose';

import { getMoveDirection, isMovieHidden } from './utils';
import Shadow from './Shadow';
import {
  MoviePreviewContainer,
  BackgroundImage,
} from './styles';

const MoviePreview = ({
  movie,
  start,
  end,
  displayShadow,
  handleChangeShadowDisplay,
  index,
}) => (
  <MoviePreviewContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    hidden={isMovieHidden(index, start, end)}
    pos={index}
  >
    <BackgroundImage
      hidden={isMovieHidden(index, start, end)}
      coverImage={movie.coverImage}
      displayShadow={displayShadow}
    />
    {
      displayShadow && !isMovieHidden(index, start, end) &&
      <Shadow index={index} movie={movie} displayShadow={displayShadow} />
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: object.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  index: number.isRequired,
};

const enhance = withStateHandlers(
  {
    displayShadow: false,
  },
  {
    handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
  },
);

export default enhance(MoviePreview);

