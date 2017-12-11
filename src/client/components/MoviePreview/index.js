import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import Rating from '../Rating';

import {
  MoviePreviewContainer,
  Shadow,
  Title,
  LinkStyed,
  FakeDiv,
  MainContainer,
} from './styles';

const MoviePreview = ({
  movie,
  displayShadow,
  showShadow,
  hideShadow,
}) => (
  <MainContainer>
    <LinkStyed to={`/movie/${movie.id}`}>
      <MoviePreviewContainer
        onMouseEnter={showShadow}
        onMouseLeave={hideShadow}
        coverImage={movie.coverImage}
        displayShadow={displayShadow}
      >
        {displayShadow &&
          <Shadow displayShadow={displayShadow}>
            <Title>{`${movie.name} (${movie.year})`}</Title>
          </Shadow>
        }
      </MoviePreviewContainer>
    </LinkStyed>
  </MainContainer>
);

MoviePreview.propTypes = {
  movie: PropTypes.object.isRequired,
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

