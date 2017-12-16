import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import GoPerson from 'react-icons/lib/go/person';
import GoOrganization from 'react-icons/lib/go/organization';
import { Link } from 'react-router-dom';

import {
  MAIN_COLOR,
  MAIN_COLOR_HOVER,
  DARK_GREY,
} from '../../colors';

export const SideMenuStyled = styled.div`
  position:fixed;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  left:0;
  top:0;
  width:85px;
  background:linear-gradient( 160deg, rgb(33,33,33), rgb(26,26,26));  60%);
  height:100%;
`;

export const MenuElemStyled = styled(Link)`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width:100%;
  cursor:pointer;
  min-height:70px;
  transition:all 0.2s ease;
  color:${({ selected }) => selected ? MAIN_COLOR : DARK_GREY};
  font-size:2em;
  &:active {
    transition:all 0.1s ease;
  }
  &:hover {
    color:${MAIN_COLOR_HOVER};
  }
  &:focus {
    outline:none;
  }
`;

export const HomeIcon = styled(GoPlaybackPlay)`
`;

export const ProfilIcon = styled(GoPerson)`
`;

export const UsersIcon = styled(GoOrganization)`
`;

export const Header = styled.div`
  padding-top:20px;
  width:100%;
  height:225px;
`;

export const Separator = styled.div`
  width:40%;
  height:1px;
  border-radius:3px;
  background-color:${DARK_GREY};
  margin-top:20px;
  margin-bottom:0px;
`;
