import React from 'react';

import { ListContainer } from './styles';
import MoviePreview from '../../components/MoviePreview';

const MovieList = () => (
  <ListContainer>
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
    <MoviePreview />
  </ListContainer>
);

export default MovieList;
