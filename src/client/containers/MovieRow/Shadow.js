import React from 'react';
import { withStateHandlers } from 'recompose';
import {
  number,
  func,
  object,
} from 'prop-types';
import req from '../../request';

import {
  ShadowContainer,
  Title,
  LinkStyed,
  DescriptionContainer,
  PlayLogo,
  DesciptionText,
  MoreButton,
} from './styles';
import Rating from '../../components/Rating';

const Shadow = ({
  movie,
  opacity,
  handleChangeOpacity,
  handleChangeIsPreviewOpen,
  loadDetailsData,
}) => (
  <ShadowContainer
    opacity={opacity}
    onMouseEnter={() => handleChangeOpacity(1)}
    onMouseLeave={() => handleChangeOpacity(0)}
  >
    <Title opacity={opacity}>{`${movie.title} (${movie.year})`}</Title>
    <LinkStyed opacity={opacity} to={`/video/${movie.imdbId}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={movie.imdbRating} opacity={opacity}/>
    <DescriptionContainer>
      <DesciptionText>
        {movie.summary}
      </DesciptionText>
      <MoreButton
        onClick={event => {
          event.persist();
          handleChangeIsPreviewOpen(movie.imdbId);
          req.movieDetail(movie.imdbId)
            .then(data => {
              loadDetailsData(data);
            });
        }}
      />
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  opacity: number.isRequired,
  handleChangeOpacity: func.isRequired,
  movie: object.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
};

const enhance = withStateHandlers(
  {
    opacity: 0,
  },
  {
    handleChangeOpacity: () => opacity => ({ opacity }),
  },
);

export default enhance(Shadow);
