import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import {
  MoviePreviewContainer,
  Shadow,
  Title,
  PlayLogo,
  DescriptionContainer,
  Description,
} from './styles';

const MoviePreview = ({
  movie,
  handleGoLeft,
  handleGoRight,
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
    hidden={movie.id < start || movie.id >= ((end + start) - 1)}
  >
    {displayShadow &&
      <Shadow displayShadow={displayShadow}>
        <Title>{`${movie.name} (${movie.year})`}</Title>
        <PlayLogo />
        <DescriptionContainer>
          <Description>
            {movie.description}
          </Description>
        </DescriptionContainer>
      </Shadow>
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
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

