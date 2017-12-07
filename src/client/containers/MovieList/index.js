import React from 'react';

import { ListStyled } from './styles';
import MoviePreview from '../../components/MoviePreview';

const MovieList = () => (
  <ListStyled>
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
  </ListStyled>
);

export default MovieList;
