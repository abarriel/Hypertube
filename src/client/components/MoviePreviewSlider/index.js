import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import { number, func } from 'prop-types';

import { DELAY } from './constant';
import { images } from './images';
import {
  MoviePreviewSliderContainer,
  MoviePreviewSliderImageContainer,
  MoviePreviewSliderImage,
} from './styles';
import Pager from './Pager';

const getNewPosition = position => {
  if (position + 1 > images.length - 1) {
    return 0;
  }
  return position + 1;
};

const MoviePreviewSlider = ({
  position,
  handleChangePosition,
}) => (
  <div>
    <MoviePreviewSliderContainer position={position} onClick={() => handleChangePosition(getNewPosition(position))}>
      {images.map(image => (
        <MoviePreviewSliderImageContainer key={image.id}>
          <MoviePreviewSliderImage coverImage={image.coverImage} />
        </MoviePreviewSliderImageContainer>
      ))}
    </MoviePreviewSliderContainer>
    <Pager position={position} handleChangePosition={handleChangePosition} />
  </div>
);

MoviePreviewSlider.propTypes = {
  position: number.isRequired,
  handleChangePosition: func.isRequired,
};

const enhance = compose(
  withStateHandlers(
    {
      position: 0,
    },
    {
      handleChangePosition: () => position => ({ position }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.setInterval(() => this.props.handleChangePosition(getNewPosition(this.props.position)), DELAY);
    },
  }),
);

export default enhance(MoviePreviewSlider);
