import React from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import { number, func } from 'prop-types';

import { images } from './images';
import {
  MoviePreviewSliderContainer,
  MoviePreviewSliderImageContainer,
} from './styles';

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
  <MoviePreviewSliderContainer position={position} onClick={() => handleChangePosition(getNewPosition(position))}>
    {images.map(image => <MoviePreviewSliderImageContainer key={image.id} coverImage={image.coverImage} />)}
  </MoviePreviewSliderContainer>
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
      window.setInterval(() => this.props.handleChangePosition(getNewPosition(this.props.position)), 10000);
    },
    componentWillUnmount() {
      window.setInterval();
    },
  }),
);

export default enhance(MoviePreviewSlider);
