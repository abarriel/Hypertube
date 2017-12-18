import React from 'react';
import { withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

import {
  ShadowContainer,
  Title,
  LinkStyed,
  DescriptionContainer,
  Description,
  PlayLogo,
} from './styles';

const Shadow = ({
  movie,
  ishover,
  handleHover,
  handleNotHover,
}) => (
  <ShadowContainer
    ishover={ishover}
    onMouseEnter={handleHover}
    onMouseLeave={handleNotHover}
  >
    <Title>{`${movie.name} (${movie.year})`}</Title>
    <LinkStyed ishover={ishover} to={`/movie/${movie.id}`}>
      <PlayLogo />
    </LinkStyed>
    <DescriptionContainer ishover={ishover}>
      <Description >
        {movie.description}
      </Description>
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  ishover: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleNotHover: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const enhance = withStateHandlers(
  {
    ishover: false,
  },
  {
    handleHover: () => () => ({ ishover: true }),
    handleNotHover: () => () => ({ ishover: false }),
  },
);

export default enhance(Shadow );
