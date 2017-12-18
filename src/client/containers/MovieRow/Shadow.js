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
  isHover,
  handleHover,
  handleNotHover,
}) => (
  <ShadowContainer
    isHover={isHover}
    onMouseEnter={handleHover}
    onMouseLeave={handleNotHover}
  >
    <Title>{`${movie.name} (${movie.year})`}</Title>
    <LinkStyed isHover={isHover} to={`/movie/${movie.id}`}>
      <PlayLogo />
    </LinkStyed>
    <DescriptionContainer isHover={isHover}>
      <Description >
        {movie.description}
      </Description>
    </DescriptionContainer>
  </ShadowContainer>
);

Shadow.propTypes = {
  isHover: PropTypes.bool.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleNotHover: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

const enhance = withStateHandlers(
  {
    isHover: false,
  },
  {
    handleHover: () => () => ({ isHover: true }),
    handleNotHover: () => () => ({ isHover: false }),
  },
);

export default enhance(Shadow );
