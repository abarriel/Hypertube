import styled from 'styled-components';
import { MAIN_COLOR, MAIN_COLOR_HOVER } from '../../colors';

export const LogoContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:70px;
  cursor:pointer;
`;

export const Bar1 = styled.div`
`;

export const Bar2 = styled.div`
  position:absolute;
  display:flex;
  height:50px;
  width:10px;
  right:27px;
  margin-top:3px;
  background-color: ${MAIN_COLOR};
  border-radius:100px;
  transform:rotate(30deg);
  transition: all 0.3s ease;
  &:hover {
    transform:rotate(0deg); 
  }
  &:hover {
    background-color:${MAIN_COLOR_HOVER};
  }
`;

export const Bar3 = styled.div`
  position:absolute;
  display:flex;
  height:50px;
  width:10px;
  left:27px;
  background-color: ${MAIN_COLOR};
  border-radius:100px;
  transform:rotate(30deg);
  transition: all 0.3s ease;
  &:hover {
    transform:rotate(60deg); 
  }
  &:hover {
    background-color:${MAIN_COLOR_HOVER};
  }
`;
