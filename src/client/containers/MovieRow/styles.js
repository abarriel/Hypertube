import styled from 'styled-components';

const HEIGHT = 130;
const WIDTH = 220;
const TRANSITION = 0.2;

export const MovieRowContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  min-width:100%;
  margin-top:20px;
  transition: all ${TRANSITION}s ease;
  margin-bottom:20px;
  margin-left:${({ start }) => `-${(start) * (WIDTH)}px`};
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
  transition-delay:0.5s;
  z-index:100;
  &:hover {
    transform: scale(2);
    z-index:1000;
  }
  margin-left:5px;
  margin-right:
`;
