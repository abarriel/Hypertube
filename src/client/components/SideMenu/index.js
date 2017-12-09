import React from 'react';

import Menuelem from './MenuElem';
import {
  SideMenuStyled,
  Header,
  HomeIcon,
  ProfilIcon,
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
];

const SideMenu = () => (
  <SideMenuStyled>
    <Header />
    {menu.map(item => <Menuelem key={item.id} icon={item.icon} to={item.to} last={item.id === menu.length - 1} />)}
  </SideMenuStyled>
);

export default SideMenu;
