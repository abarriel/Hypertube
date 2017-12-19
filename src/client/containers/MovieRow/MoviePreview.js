import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import Shadow from './Shadow';
import {
  MoviePreviewContainer,
  BackgroundImage,
} from './styles';

const isHidden = (index, start, end) => index < start || index >= ((end + start) - 1);

const getDirection = (start, end, id, length) => {
  if (id <= start + (Math.round(end / 2) - 2)) {
    if (start - 1 < 0) {
      return 0;
    }
    return -1;
  }
  if (start + 1 + end > length + 1) {
    return 0;
  }
  return 1;
};

const MoviePreview = ({
  movie,
  start,
  end,
  length,
  displayShadow,
  showShadow,
  hideShadow,
  move,
  index,
}) => (
  <MoviePreviewContainer
    onMouseEnter={showShadow}
    onMouseLeave={hideShadow}
    hidden={isHidden(index, start, end)}
    onClick={() => move(getDirection(start, end, index, length))}
  >
    <BackgroundImage hidden={isHidden(index, start, end)} coverImage={movie.cover_image} displayShadow={displayShadow} />
    {displayShadow && !isHidden(index, start, end) &&
      <Shadow index={index} movie={movie} displayShadow={displayShadow} />
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  displayShadow: PropTypes.bool.isRequired,
  showShadow: PropTypes.func.isRequired,
  hideShadow: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
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

