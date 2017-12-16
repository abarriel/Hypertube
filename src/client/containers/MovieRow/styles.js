import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';

const HEIGHT = 330;
const WIDTH = 220;
const TRANSITION = 0.2;

export const MovieRowContent = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`;
export const MovieRowContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  min-width:100%;
  margin-top:20px;
  transition: all ${TRANSITION}s ease;
  margin-bottom:20px;
  margin-left:${({ margin }) => `${(margin * (WIDTH)) + 25}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  position:relative;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor:pointer;
  transition: all ${TRANSITION}s;
  transition-delay:0.3s;
  z-index:100;
  &:hover {
    transform: scale(1.3);
    z-index:1000;
  }
  margin-left:7.5px;
  margin-right:7.5px;
`;

export const ScrollBarContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width:calc(100vw - 110px);
  min-height:10px;
  margin-bottom:15px;
  margin-left:25px;
`;

export const ScrollBarInner = styled.div`
  position:relative;
  display:flex;
  background-color:${MAIN_COLOR};
  height:2px;
  border-radius:100px;
  transition: all ${TRANSITION}s;
  width:${({ width }) => `${width}%`};
  margin-left:${({ margin }) => `${margin}%`};
`;