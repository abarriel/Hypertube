import React from 'react';
import {
  string,
} from 'prop-types';
import {
  EmptySearchContainer,
  Text,
} from './styles';

const EmptySearch = ({ value }) => (
  <EmptySearchContainer>
    <Text>{`Aucun résultat pour votre recherche : "${value}".`}</Text>
    <Text>Suggestions :</Text>
    <ul>
      <Text>{'Essayez avec d\'autres mots-clés'}</Text>
      <Text>Vous recherchez un film ou une série TV ?</Text>
      <Text>{'Essayez avec le titre d\'un film ou d\'une série, ou le nom d\'un acteur ou d\'un réalisateur'}</Text>
      <Text>Essayez avec un genre, tel que Comédie, Romance, Sport ou Drame</Text>
    </ul>
  </EmptySearchContainer>
);

EmptySearch.propTypes = {
  value: string.isRequired,
};

export default EmptySearch;
