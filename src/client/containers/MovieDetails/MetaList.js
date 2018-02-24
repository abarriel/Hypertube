import React from 'react';
import {
  string,
  array,
} from 'prop-types';

import {
  MetaListContainer,
  MetaListRow,
  MetaListTitle,
  MetaListElem,
} from './styles';

const MetaList = ({
  cast,
  genres,
  production,
}) => (
  <MetaListContainer>
    <MetaListRow>
      <MetaListTitle>Avec: </MetaListTitle>
      <MetaListElem>{cast.toString()}</MetaListElem>
    </MetaListRow>
    <MetaListRow>
      <MetaListTitle>Genres: </MetaListTitle>
      <MetaListElem>{genres.toString()}</MetaListElem>
    </MetaListRow>
    <MetaListRow>
      <MetaListTitle>Production: </MetaListTitle>
      <MetaListElem>{production}</MetaListElem>
    </MetaListRow>
  </MetaListContainer>
);

MetaList.propTypes = {
  cast: array.isRequired,
  genres: array.isRequired,
  production: string.isRequired,
};

export default MetaList;
