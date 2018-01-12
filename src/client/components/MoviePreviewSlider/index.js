import React from 'react';

import { images } from './images';
import {
  MoviePreviewSliderContainer,
  MoviePreviewSliderImageContainer,
  MoviePreviewSliderImage,
  Cache,
  MoviePreviewSlideInfo,
  MoviePreviewSlideInfoInner,
  MovieLogo,
  ButtonContainer,
  Button,
  Description,
} from './styles';

const getRandomMovie = () => 1;

const randomMovie = () => getRandomMovie();

const MoviePreviewSlider = () => (
  <div>
    <MoviePreviewSliderContainer>
      <MoviePreviewSliderImageContainer>
        <MoviePreviewSliderImage coverImage={images[randomMovie()].coverImage}>
          <MoviePreviewSlideInfo>
            <MoviePreviewSlideInfoInner>
              <MovieLogo movieLogo={images[randomMovie()].logo} />
              <ButtonContainer>
                <Button />
                <Button />
              </ButtonContainer>
              <Description>{images[randomMovie()].description}</Description>
            </MoviePreviewSlideInfoInner>
          </MoviePreviewSlideInfo>
        </MoviePreviewSliderImage>
      </MoviePreviewSliderImageContainer>
      <Cache />
    </MoviePreviewSliderContainer>
  </div>
);

export default MoviePreviewSlider;
