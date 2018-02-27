import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  number,
  object,
  func,
} from 'prop-types';
import req from '../../request';

import {
  ShadowContainer,
  Title,
  PlayLogoContainer,
  DescriptionContainer,
  PlayLogo,
  DesciptionText,
  MoreButton,
  RatingContainer,
  TopSide,
  BotSide,
} from './styles';
import { getColor } from '../../utils';

const Shadow = ({
  movie,
  handleChangeOpacity,
  opacity,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  wichHover,
  handleChangeWichHover,
}) => (
  <ShadowContainer
    opacity={opacity}
    onMouseEnter={() => handleChangeOpacity(1)}
    onMouseLeave={() => handleChangeOpacity(0)}
  >
    <TopSide onMouseEnter={() => handleChangeWichHover(1)}>
      <Title opacity={opacity}>{`${movie.title} (${movie.year})`}</Title>
      <PlayLogoContainer opacity={opacity} to={`/video/${movie.imdbId}`}>
        <PlayLogo color={wichHover === 1 ? '#e50914' : 'white'} />
      </PlayLogoContainer>
    </TopSide>
    <BotSide
      onMouseEnter={() => handleChangeWichHover(2)}
      onClick={event => {
        event.persist();
        handleChangeIsPreviewOpen(movie.imdbId);
        req.movieDetail(movie.imdbId)
          .then(data => {
            loadDetailsData(data);
          });
      }}
    >
      <DescriptionContainer>
        <RatingContainer color={getColor(movie.imdbRating, 0, 5)} >{`${movie.imdbRating}/5`}</RatingContainer>
        <DesciptionText>
          {movie.summary.substring(1, 200)}
        </DesciptionText>
        <MoreButton
          color={wichHover === 2 ? '#e50914' : 'white'}
        />
      </DescriptionContainer>
    </BotSide>
  </ShadowContainer>
);

Shadow.propTypes = {
  handleChangeOpacity: func.isRequired,
  movie: object.isRequired,
  opacity: number.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  wichHover: number.isRequired,
  handleChangeWichHover: func.isRequired,
};

const enhance = withStateHandlers(
  {
    opacity: 0,
    wichHover: -1,
  },
  {
    handleChangeOpacity: () => opacity => ({ opacity }),
    handleChangeWichHover: () => hoveredPart => ({ wichHover: hoveredPart }),
  },
);

export default enhance(Shadow);
