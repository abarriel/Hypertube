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


const fakeMovieDescription = 'En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l\'île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L\'une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d\'une cellule fermée de l\'extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Oeuvre cohérente d\'une malade, ou cryptogramme ?'
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
    <LinkStyed opacity={opacity} to={`/movie/${movie.id}`}>
      <PlayLogo />
    </LinkStyed>
    <Rating rating={3} opacity={opacity}/>
    <DescriptionContainer>
      <DesciptionText opacity={opacity}>
        {fakeMovieDescription}
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
