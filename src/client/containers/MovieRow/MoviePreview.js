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
  length,
  displayShadow,
  handleChangeShadowDisplay,
  move,
  index,
}) => (
  <MoviePreviewContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    onClick={() => move(getMoveDirection(start, end, index, length))}
    hidden={isMovieHidden(index, start, end)}
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
  length: number.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  move: func.isRequired,
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

