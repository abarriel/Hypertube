import React from 'react';
import { HomeContainer, MainContent } from './styles';

import SideMenu from '../../components/SideMenu';
import MovieList from '../../containers/MovieList';
import Search from '../../containers/Search';

const Home = () => (
  <HomeContainer>
    <SideMenu />
    <MainContent>
      <Search />
      <MovieList />
    </MainContent>
  </HomeContainer>
);

export default Home;
