import styled from 'styled-components';
import GoFlame from 'react-icons/lib/go/flame';
import GoPerson from 'react-icons/lib/go/person';
import GoOrganization from 'react-icons/lib/go/organization';
import GoListUnordered from 'react-icons/lib/go/list-unordered';
import { Link } from 'react-router-dom';

import {
  MAIN_COLOR,
} from '../../colors';

export const SideMenuStyled = styled.div`
  position:fixed;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  top:0;
  left:0px;
  width:100%;
  background:#000;
  height:70px;
  z-index:2000;
  box-shadow: 0 0 30px 1px rgba(0,0,0,0.4);
`;

export const MenuElemStyled = styled(Link)`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  min-width:50px;
  margin-left:18px;
  height:100%;
  cursor:pointer;
  transition:all 0.2s ease;
  color:white;
  font-size:1em;
  text-decoration:none;
  &:active {
    transition:all 0.1s ease;
  }
  &:hover {
    color:white;
  }
  &:focus {
    outline:none;
  }
`;

export const HomeIcon = styled(GoFlame)`
`;

export const ProfilIcon = styled(GoPerson)`
`;

export const UsersIcon = styled(GoOrganization)`
`;

export const ListIcon = styled(GoListUnordered)`
`;

export const Header = styled.div`
  width:100px;
  height:100%;
`;

export const MenuElemText = styled.p`
  color:${({ selected }) => selected ? 'white' : '#b3b3b3'};
  cursor:${({ selected }) => selected ? 'pointer' : 'default'};
  font-weight: ${({ selected }) => selected ? 0 : 0}px;
  margin:0;
  font-size:1vw;
`;

export const UnderLine = styled.div`
  position:absolute;
  bottom:0;
  width:100%;
  height:6px;
  background-color:${MAIN_COLOR};
  margin-top:20px;
  margin-bottom:0px;
`;
