import React from 'react';

import Header from './Header';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';

const Home = () => (
  <HomeContainer>
    <MainContent>
      <Header />
      <Section title="Nouveautés" />
      <Section title="Tendances actuelles" />
    </MainContent>
  </HomeContainer>
);

export default Home;
