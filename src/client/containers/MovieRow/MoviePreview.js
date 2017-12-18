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

const MoviePreview = ({
  movie,
  start,
  end,
  displayShadow,
  showShadow,
  hideShadow,
}) => (
  <MoviePreviewContainer
    onMouseEnter={showShadow}
    onMouseLeave={hideShadow}
    coverImage={movie.coverImage}
    hidden={isHidden(movie, start, end)}
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

