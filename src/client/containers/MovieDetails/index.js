import React from 'react';
import {
  func,
  number,
  object,
  string,
} from 'prop-types';
import { withStateHandlers } from 'recompose';

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
import FakeShadow from './FakeShadow';
import Footer from './Footer/index';
import AddListButton from '../../components/AddListButton';
import Comments from '../../containers/Comments';

const MovieDetails = ({
  handleChangeIsPreviewOpen,
  height,
  detailsData,
  imdbId,
  resetDetailsData,
  selectedSlide,
  handleChangeSelectedSlide,
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
      {(detailsData && selectedSlide !== -1 && imdbId === detailsData.movie.imdbId) &&
        <MovieDetailsContainer height={height}>
          {selectedSlide === 0 && <FakeShadow />}
          {selectedSlide === 0 &&
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
            </Shadow>}
          {selectedSlide === 0 && <GradientShadow />}
          {selectedSlide === 0 &&
            <CoverImage height={height}>
              <YouTubeContainer
                videoId={detailsData.movie.trailer}
                onReady={event => event.target.playVideo()}
                opts={opts}
              />
            </CoverImage>
          }
          {selectedSlide === 1 &&
            <Comments height={height} imdbId={imdbId} />
          }
          <Cross
            onClick={() => {
              handleChangeIsPreviewOpen();
              resetDetailsData();
            }}
          />
          <Footer
            selectedSlide={selectedSlide}
            handleChangeSelectedSlide={handleChangeSelectedSlide}
          />
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
  selectedSlide: number.isRequired,
  handleChangeSelectedSlide: func.isRequired,
};

export default withStateHandlers(
  {
    selectedSlide: 0,
  },
  {
    handleChangeSelectedSlide: () => newSelectedSlide => ({ selectedSlide: newSelectedSlide }),
  },
)(MovieDetails);
