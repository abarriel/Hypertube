import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  number,
  func,
  object,
  array,
} from 'prop-types';
import { includes } from 'lodash';

import req from '../../request';
import {
  ShadowContainer,
  Title,
  PlayLogoContainer,
  DescriptionContainer,
  PlayLogo,
  DesciptionText,
  MoreButton,
  TopSide,
  BotSide,
  RatingContainer,
  ViewOrNot,
  RatingAndView,
} from './styles';
import { getColor } from '../../utils';


const Shadow = ({
  movie,
  opacity,
  handleChangeOpacity,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  wichHover,
  handleChangeWichHover,
  history,
}) => {
  console.log('history: ', history);
  console.log('movie.imdbId: ', movie.imdbId);
  const isView = includes(history, movie.imdbId);
  console.log('isView: ', isView);
  return (
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
          if (movie.type === 'movie') {
            req.movieDetail(movie.imdbId).then(data => loadDetailsData(data));
          } else {
            req.showDetail(movie.imdbId).then(data => loadDetailsData(data));
          }
        }}
      >
        <DescriptionContainer>
          <RatingAndView>
            <RatingContainer color={getColor(movie.imdbRating, 0, 5)} >{`${movie.imdbRating}/5`}</RatingContainer>
            <ViewOrNot color={isView ? '#46d369' : 'white'} >{isView ? 'View' : 'Not View'}</ViewOrNot>
          </RatingAndView>
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
};

Shadow.propTypes = {
  opacity: number.isRequired,
  handleChangeOpacity: func.isRequired,
  movie: object.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  wichHover: number.isRequired,
  handleChangeWichHover: func.isRequired,
  history: array.isRequired,
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
