import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import Shadow from './Shadow';
import {
  MoviePreviewContainer,
  Title,
  PlayLogo,
  DescriptionContainer,
  Description,
  LinkStyed,
} from './styles';

const isHidden = (movie, start, end) => movie.id < start || movie.id >= ((end + start) - 1);

const getDelay = (wichHover, position) => {
  if (wichHover === position - 1 || wichHover === position + 1) {
    return true;
  }
  return false;
}

const getDirection = (start, end, id) => {
  if (id <= start + Math.round(end / 2) - 2) {
    if (start - 1 < 0) {
      return 0;
    }
    return -1;
  }
  return 1;
}

const MoviePreview = ({
  movie,
  start,
  end,
  displayShadow,
  showShadow,
  hideShadow,
  move
}) => (
  <MoviePreviewContainer
    onMouseEnter={showShadow}
    onMouseLeave={hideShadow}
    coverImage={movie.coverImage}
    hidden={isHidden(movie, start, end)}
    onClick={() => move(getDirection(start, end, movie.id))}
  >
    {displayShadow && !isHidden(movie, start, end) &&
      <Shadow movie={movie} displayShadow={displayShadow} />
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  displayShadow: PropTypes.bool.isRequired,
  showShadow: PropTypes.func.isRequired,
  hideShadow: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
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

