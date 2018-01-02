import styled from 'styled-components';

import {
  MAIN_COLOR,
} from '../../colors';

export const SlideSelectContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height:45px;
  margin:5px;
`;

export const Line = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width:${({ length, interval }) => `${(length * interval) + 8}px`};;
  height:3px;
  background-color:rgba(242,38,19,0.3);
  border-radius:5px;
`;

export const Circle = styled.div`
  position:absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  min-width:16px;
  min-height:16px;
  max-width:16px;
  max-height:16px;
  background-color:${MAIN_COLOR};
  border-radius:100%;
  cursor:pointer;
  margin-left:${({ value, interval }) => `${value * interval}px`};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 30px 1px rgba(0,0,0,0.4);
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    opacity:0.9;
    transform: scale(1);
  }
`;

export const Label = styled.p`
  color:white;
  margin:0;
  margin-right:20px;
  user-select: none;
  width:60px;
`;

export const CircleLabel = styled.p`
  user-select: none;
  display:flex;
  color:white;
  margin:0;
  margin-top:-40px;
  margin-left:-1px;
`;
