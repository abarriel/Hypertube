import React from 'react';
import {
  func,
  number,
  object,
  string,
} from 'prop-types';

import {
  MovieDetailsContainer,
  FakeMovieDetailsContainer,
  Closer,
  CoverImage,
} from './styles';
import MiniPlayer from '../../components/MiniPlayer';

const MovieDetails = ({
  handleChangeIsPreviewOpen,
  height,
  detailsData,
  imdbId,
  resetDetailsData,
}) => (
  <FakeMovieDetailsContainer height={height}>
    {(detailsData && imdbId === detailsData.movie.imdbId) &&
      <MovieDetailsContainer height={height}>
        <CoverImage image={detailsData.movie.backgroundImage}>
          <MiniPlayer />
        </CoverImage>
      </MovieDetailsContainer>
    }
    {height !== 0 &&
      <Closer onClick={() => {
        handleChangeIsPreviewOpen();
        resetDetailsData();
        }}
      />
    }
  </FakeMovieDetailsContainer>
);

MovieDetails.propTypes = {
  handleChangeIsPreviewOpen: func.isRequired,
  height: number.isRequired,
  detailsData: object,
  imdbId: string,
  resetDetailsData: func.isRequired,
};

export default MovieDetails;
