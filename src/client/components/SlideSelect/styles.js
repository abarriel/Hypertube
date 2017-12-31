import styled from 'styled-components';

import {
  MAIN_COLOR,
  LIGHT_GREY,
} from '../../colors';

export const SlideSelectContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:30px;
  width:200px;
  margin:5px;
  margin-left:15px;
`;

export const Line = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  height:5px;
  background-color:${LIGHT_GREY};
  border-radius:5px;
`;

export const Circle = styled.div`
  display:flex;
  width:15px;
  height:15px;
  background-color:${MAIN_COLOR};
  border-radius:100%;
  cursor:pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity:0.9;
  }
`;
