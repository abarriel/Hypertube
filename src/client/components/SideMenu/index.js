import React from 'react';

import Menuelem from './MenuElem';
import Logo from '../Logo';
import ProfilMenu from '../../containers/ProfilMenu';
import {
  SideMenuStyled,
  Header,
} from './styles';

const menu = [
  {
    id: 0,
    to: '/',
    label: 'Accueil',
  },
  {
    id: 1,
    to: '/movies',
    label: 'Films',
  },
  {
    id: 3,
    to: '/users',
    label: 'Ma liste',
  },
];

const isSelected = pathName => window.location.pathname === pathName;

const SideMenu = () => (
  <SideMenuStyled>
    <Header>
      <Logo />
    </Header>
    {menu.map(item => (
      <Menuelem
        key={item.id}
        selected={isSelected(item.to)}
        label={item.label}
        to={item.to}
      />))}
    <ProfilMenu />
  </SideMenuStyled>
);

export default SideMenu;
