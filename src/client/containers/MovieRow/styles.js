import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';
import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

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
  margin-left:${({ margin }) => `${(margin * (WIDTH + 15)) + 25}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  position:relative;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  opacity:${({ hidden }) => hidden ? 0.5 : 1};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all ${TRANSITION}s;
  transition-delay:0s;
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1)'};
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.3)'};
    z-index:${({ hidden }) => hidden ? '100' : '1000'};
    cursor:${({ hidden }) => hidden ? 'auto' : 'pointer'};
  };
  margin-left:${MARGIN}px;
  margin-right:${MARGIN}px;
  border-radius:1px;
`;

export const ScrollBarContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: ${({ isEnd }) => isEnd ? 'flex-end' : 'flex-start'};
  align-items: center;
  width:calc(100vw - 200px);
  min-height:10px;
  margin-bottom:15px;
  margin-left:35px;
`;

export const ScrollBarInner = styled.div`
  position:relative;
  display:flex;
  background-color:${MAIN_COLOR};
  height:2px;
  border-radius:100px;
  transition: all ${TRANSITION}s;
  width:${({ width }) => `${width}px`};
  margin-left:${({ margin }) => `${margin}px`};
`;
