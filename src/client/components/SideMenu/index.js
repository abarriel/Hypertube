import React from 'react';

import Menuelem from './MenuElem';
import Logo from '../Logo';
import {
  SideMenuStyled,
  Header,
  HomeIcon,
  ProfilIcon,
  UsersIcon,
} from './styles';

const menu = [
  {
    id: 0,
    to: '/',
    icon: <HomeIcon />,
  },
  {
    id: 1,
    to: '/profil',
    icon: <ProfilIcon />,
  },
  {
    id: 2,
    to: '/users',
    icon: <UsersIcon />,
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
        icon={item.icon}
        selected={isSelected(item.to)}
        to={item.to}
        last={item.id === menu.length - 1}
      />))}
  </SideMenuStyled>
);

export default SideMenu;
