import React from 'react';

import { HeaderContainer, HeaderImage } from './styles';

const Header = () => (
  <HeaderContainer onScroll={(e) => console.log(e)}>
    <HeaderImage src="http://www.critictoo.com/wp-content/uploads/2015/01/vikings-saison-3.jpg"/>
  </HeaderContainer>
);

export default Header;
