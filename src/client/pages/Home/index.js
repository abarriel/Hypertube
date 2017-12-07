import React from 'react';
import { HomeContainer } from './styles';

import SideMenu from '../../components/SideMenu';
import MovieList from '../../containers/MovieList';

const Home = () => (
  <HomeContainer>
    <SideMenu />
    <MovieList />
  </HomeContainer>
);

export default Home;
