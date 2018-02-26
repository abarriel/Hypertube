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
  Title,
  Shadow,
  GradientShadow,
  ButtonsContainer,
  DetailsContent,
  Synopsis,
  YouTubeContainer,
  Cross,
} from './styles';
import PlayButton from '../../components/PlayButton';
import MetaList from './MetaList';
import MetaData from './MetaData';
import FakeShadow  from './FakeShadow';
import Footer from './Footer';
import AddListButton from '../../components/AddListButton';

const MovieDetails = ({
  handleChangeIsPreviewOpen,
  height,
  detailsData,
  imdbId,
  resetDetailsData,
}) => {
  const opts = {
    height: '100%',
    width: '80%',
    playerVars: {
      showinfo: 0,
      controls: 0,
      loop: 1,
      modestbranding: 0,
      rel: 0,
    },
  };

  return (
    <FakeMovieDetailsContainer height={height}>
      {(detailsData && imdbId === detailsData.movie.imdbId) &&
        <MovieDetailsContainer height={height}>
          <FakeShadow />
          <Shadow>
            <Title>{detailsData.movie.title}</Title>
            <DetailsContent>
              <MetaData
                rating={detailsData.movie.score}
                years={detailsData.movie.released}
                duration={detailsData.movie.runtime}
              />
              <Synopsis>{detailsData.movie.summary}</Synopsis>
              <ButtonsContainer>
                <PlayButton to={`/video/${detailsData.movie.imdbId}`} />
                <AddListButton />
              </ButtonsContainer>
              <MetaList
                cast={detailsData.movie.actors}
                genres={detailsData.movie.genres}
                production={detailsData.movie.production}
              />
            </DetailsContent>
          </Shadow>
          <GradientShadow />
          <CoverImage height={height}>
            <YouTubeContainer
              videoId={detailsData.movie.trailer}
              onReady={event => event.target.playVideo()}
              opts={opts}
            />
          </CoverImage>
          <Cross
            onClick={() => {
              handleChangeIsPreviewOpen();
              resetDetailsData();
            }}
          />
          <Footer />
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
};

MovieDetails.propTypes = {
  handleChangeIsPreviewOpen: func.isRequired,
  height: number.isRequired,
  detailsData: object,
  imdbId: string,
  resetDetailsData: func.isRequired,
};

export default MovieDetails;
