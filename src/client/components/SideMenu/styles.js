import styled from 'styled-components';
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
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;
export const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:200px;
  height:100%;
`;

export const MenuElemText = styled.p`
  color:${({ selected }) => selected ? 'white' : '#b3b3b3'};
  cursor:${({ selected }) => selected ? 'pointer' : 'default'};
  font-weight: ${({ selected }) => selected ? 700 : 0};
  margin:0;
  font-size:0.9em;
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
