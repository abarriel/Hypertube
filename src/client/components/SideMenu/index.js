import React from 'react';
import _ from 'lodash';
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
import { noAuthneeded } from '../../auth';

const isSelected = pathName => window.location.pathname === pathName;

const isOnMovies = () => window.location.pathname === '/movies';

const SideMenu = () => {
  const { pathname } = window.location;
  const [route] = _.split(pathname.slice(1), '/');
  if (_.includes(noAuthneeded, route)) return null;
  return (
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
        {isOnMovies() && <SearchBar />}
        <ProfilMenu />
      </MenuRight>
    </SideMenuStyled>
  );
};

export default SideMenu;
