import React from 'react';
import { withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

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
}) => (
  <ShadowContainer
    onMouseEnter={() => handleChangeOpacity(1)}
    onMouseLeave={() => handleChangeOpacity(0)}
  >
    <Title>{`${movie.title} (${movie.year})`}</Title>
    <LinkStyed to={`/movie/${movie.imdbId}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={3} opacity={0.9} />
    <DescriptionContainer>
      <DesciptionText>
        {movie.summary}
      </DesciptionText>
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  handleChangeOpacity: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
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
