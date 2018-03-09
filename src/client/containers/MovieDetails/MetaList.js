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
  info = ['N/A'], // eslint-disable-line
  type = 'movie',
  genres = ['N/A'],
  production = ['N/A'],
}) => (
  <MetaListContainer>
    <MetaListRow>
      { type === 'movie' && <MetaListTitle>Cast: </MetaListTitle> }
      { type === 'movie' && <MetaListElem>{info.toString().replace(/,/g, ', ')}</MetaListElem> }
      { type === 'shows' && <MetaListTitle>Seasons: </MetaListTitle> }
      { type === 'shows' && <MetaListElem>{info}</MetaListElem>}
    </MetaListRow>
    <MetaListRow>
      <MetaListTitle>Genres: </MetaListTitle>
      <MetaListElem>{genres.toString().replace(/,/g, ', ')}</MetaListElem>
    </MetaListRow>
    <MetaListRow>
      <MetaListTitle>Production: </MetaListTitle>
      <MetaListElem>{production}</MetaListElem>
    </MetaListRow>
  </MetaListContainer>
);

MetaList.propTypes = {
  genres: array,
  type: string,
  production: string,
};

export default MetaList;
