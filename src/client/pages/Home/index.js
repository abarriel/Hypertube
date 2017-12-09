import React from 'react';
import { HomeContainer, MainContent } from './styles';

import MovieList from '../../containers/MovieList';
import Search from '../../containers/Search';

const Home = () => (
  <HomeContainer>
    <MainContent>
      <Search />
      <MovieList />
    </MainContent>
  </HomeContainer>
);

export default Home;
