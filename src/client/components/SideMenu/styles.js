import styled from 'styled-components';
import GoHome from 'react-icons/lib/go/home';
import GoPerson from 'react-icons/lib/go/person';

import { MAIN_COLOR } from '../../colors';

export const SideMenuStyled = styled.div`
  position:fixed;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  left:0;
  top:0;
  width:85px;
  background:linear-gradient( 160deg, rgb(25,25,25), rgb(20,20,20));  60%);
  height:100%;
`;

export const MenuElemStyled = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:75px;
  cursor:pointer;
`;

export const HomeIcon = styled(GoHome)`
  color:${MAIN_COLOR};
  font-size:2em;
`;

export const ProfilIcon = styled(GoPerson)`
  color:white;
  font-size:2em;
`;

export const Header = styled.div`
  height:225px;
`;