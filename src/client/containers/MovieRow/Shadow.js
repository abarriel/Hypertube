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
import Rating from '../../components/Rating';

const Shadow = ({
  movie,
  opacity,
  handleChangeOpacity,
}) => (
  <ShadowContainer
    opacity={opacity}
    onMouseEnter={() => handleChangeOpacity(1)}
    onMouseLeave={() => handleChangeOpacity(0)}
  >
    <Title>{`${movie.title} (${movie.year})`}</Title>
    <LinkStyed opacity={opacity} to={`/movie/${movie.imdbId}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={3} opacity={opacity}/>
    <DescriptionContainer>
      <DesciptionText opacity={opacity}>
        {movie.summary}
      </DesciptionText>
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  opacity: PropTypes.number.isRequired,
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

export default enhance(Shadow );
