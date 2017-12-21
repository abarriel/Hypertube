import React from 'react';
import { object, bool, func } from 'prop-types';
import { withStateHandlers } from 'recompose';

import {
  MainContainer,
  BackgroundImage,
} from './styles';
import Shadow from './Shadow';

const MoviePreview = ({
  movie,
  displayShadow,
  handleChangeShadowDisplay,
}) => (
  <MainContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
  >
    <BackgroundImage
      coverImage={movie.coverImage}
      displayShadow={displayShadow}
    />
    {
      displayShadow &&
      <Shadow movie={movie} displayShadow={displayShadow} />
    }
  </MainContainer>
);

MoviePreview.propTypes = {
  movie: object.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
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

