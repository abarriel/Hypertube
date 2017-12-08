import React from 'react';
import { map } from 'lodash';

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
    name:'home',
    icon: <HomeIcon/>,
  },
  {
    id: 1,
    name:'profil',
    icon: <ProfilIcon/>,
  }
]

const SideMenu = () => (
  <SideMenuStyled>
    <Header />
    {menu.map(item => <Menuelem key={item.id} icon={item.icon} />)}
  </SideMenuStyled>
);

export default SideMenu;
