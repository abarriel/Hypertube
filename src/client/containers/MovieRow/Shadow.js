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
    <Title opacity={opacity}>{`${movie.title} (${movie.year})`}</Title>
    <LinkStyed opacity={opacity} to={`/video/${movie.imdbId}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={movie.imdbRating} opacity={opacity}/>
    <DescriptionContainer opacity={opacity}>
      <DesciptionText>
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

export default enhance(Shadow);
