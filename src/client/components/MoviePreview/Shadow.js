import React from 'react';
import { withStateHandlers } from 'recompose';
import { number, object, func } from 'prop-types';

import {
  ShadowContainer,
  Title,
  LinkStyed,
  DescriptionContainer,
  PlayLogo,
  DesciptionText,
} from './styles';
import Rating from '../Rating';

const Shadow = ({
  movie,
  handleChangeOpacity,
  opacity,
}) => (
  <ShadowContainer
    opacity={opacity}
    onMouseEnter={() => handleChangeOpacity(1)}
    onMouseLeave={() => handleChangeOpacity(0)}
  >
    <Title>{`${movie.title} (${movie.year})`}</Title>
    <LinkStyed to={`/movie/${movie.imdbId}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={movie.imdbRating} opacity={0.9} />
    <DescriptionContainer>
      <DesciptionText>
        {movie.summary}
      </DesciptionText>
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  handleChangeOpacity: func.isRequired,
  movie: object.isRequired,
  opacity: number.isRequired,
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