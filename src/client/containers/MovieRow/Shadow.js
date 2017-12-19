import React from 'react';
import { withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

import {
  ShadowContainer,
  Title,
  LinkStyed,
  DescriptionContainer,
  PlayLogo,
} from './styles';

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
    <Title>{`${movie.name} (${movie.year})`}</Title>
    <LinkStyed opacity={opacity} to={`/movie/${movie.id}`}>
      <PlayLogo />
    </LinkStyed>
    <DescriptionContainer opacity={opacity}>
      {movie.description}>
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
    handleChangeOpacity: () => newOpacity => ({ opacity: newOpacity }),
  },
);

export default enhance(Shadow );
