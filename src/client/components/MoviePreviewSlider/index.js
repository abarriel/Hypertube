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

const getRandomMovie = () => Math.floor((Math.random() * 5) + 0);

const randomMovie = () => getRandomMovie();

const MoviePreviewSlider = () => {
  const randomPreview = randomMovie();
  return (
    <div>
      <MoviePreviewSliderContainer>
        <MoviePreviewSliderImageContainer>
          <MoviePreviewSliderImage coverImage={images[randomPreview].coverImage}>
            <MoviePreviewSlideInfo>
              <MoviePreviewSlideInfoInner>
                <MovieLogo movieLogo={images[randomPreview].logo} />
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
                <Description>{images[randomPreview].description}</Description>
              </MoviePreviewSlideInfoInner>
            </MoviePreviewSlideInfo>
          </MoviePreviewSliderImage>
        </MoviePreviewSliderImageContainer>
        <Cache />
      </MoviePreviewSliderContainer>
    </div>
  );
};

export default MoviePreviewSlider;
