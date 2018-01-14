import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoTriangleDown from 'react-icons/lib/go/triangle-down';

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
  background:#000;
  height:70px;
  z-index:2000;
  box-shadow: 0 0 30px 1px rgba(0,0,0,0.4);
  width:calc(100% - 120px);
  padding: 0 60px;
  @media (max-width: 900px) {
    padding: 0 4%;
    width:92%;
    height:40px;
  }
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
  cursor:pointer;
`;
export const Header = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
`;

export const MenuElemText = styled.p`
  color:${({ selected }) => selected ? 'white' : '#b3b3b3'};
  cursor:${({ selected }) => selected ? 'pointer' : 'default'};
  font-weight: ${({ selected }) => selected ? 700 : 0};
  margin:0;
  font-size:0.9em;
  cursor:pointer;
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

export const MenuRight = styled.div`
  position:absolute;
  display:flex;
  right:0;
  height:70px;
  @media (max-width: 900px) {
    height:40px;
  }
`;

export const LinkContainer = styled.div`
  display:flex;
  @media (max-width: 900px) {
    display:none;
  }
  height:100%;
`;

export const MiniLinkContainer = styled.div`
  position:relative;
  display:flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  height: 100%;
  font-weight:10;
  font-size: 0.789rem;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  @media (min-width: 900px) {
    display:none;
  }
`;

export const Chev = styled(GoTriangleDown)`
  margin-left:5px;
`;

export const MiniLinkWrapperContainer = styled.div`
  display:flex;
  position:absolute;
  top:40px;
  left:0;
  flex-direction:column;
  width:260px;
  background-color:rgba(0,0,0,0.9);
`;

export const MiniLinkWrapperElem = styled(Link)`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:50px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color:rgba(250,250,250,0.1);
  }
  text-decoration:none;
  color:white;
  color:${({ isSelected }) => isSelected ? 'white' : '#b3b3b3'};
  cursor:${({ isSelected }) => isSelected ? 'pointer' : 'default'};
  font-weight: ${({ isSelected }) => isSelected ? 700 : 0};
  cursor:pointer;
`;

export const SideLine = styled.div`
  position:absolute;
  display:flex;
  height:50px;
  top:0;
  left:0;
  width:5px;
  background-color:${MAIN_COLOR};
`;
