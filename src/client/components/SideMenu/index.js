import React from 'react';

import Menuelem from './MenuElem';
import Logo from '../Logo';
import ProfilMenu from '../../containers/ProfilMenu';
import SearchBar from '../../components/SearchBar';
import MiniLink from './miniLink';
import { menu } from './menu';
import {
  SideMenuStyled,
  Header,
  MenuRight,
  LinkContainer,
} from './styles';

const isSelected = pathName => window.location.pathname === pathName;

const SideMenu = () => (
  <SideMenuStyled>
    <Header>
      <Logo />
    </Header>
    <LinkContainer>
      {menu.map(item => (
        <Menuelem
          key={item.id}
          selected={isSelected(item.to)}
          label={item.label}
          to={item.to}
        />))}
    </LinkContainer>
    <MiniLink />
    <MenuRight>
      <SearchBar />
      <ProfilMenu />
    </MenuRight>
  </SideMenuStyled>
);

export default SideMenu;
