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
  BlackButton,
  RedButton,
  Description,
  PlayLogo,
  PlusLogo,
} from './styles';

const getRandomMovie = () => 3;

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
                <RedButton>
                  <PlayLogo />
                  Lecture
                </RedButton>
                <BlackButton>
                  <PlusLogo />
                  Ma Liste
                </BlackButton>
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
