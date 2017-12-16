import styled from 'styled-components';
import GoDiffAdded from 'react-icons/lib/go/diff-added';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';

const HEIGHT = 130;
const WIDTH = 220;
const TRANSITION = 0.2;
const UNWRAPED = 500;

export const MainContainer = styled.div`
  display:flex;
  position:relative;
  height:${HEIGHT + 40}px;
  margin-left:5px;
  margin-right:5px;
`;

export const LinkStyed = styled(Link)`
  text-decoration:none;
  &:focus {
    outline:none;
  }
`;

export const MoviePreviewContainer = styled.div`
  position: absolute;
  display:flex;
  width: ${({ displayShadow }) => displayShadow ? `${WIDTH * 1.6}px` : `${WIDTH}px`};
  height: ${({ displayShadow }) => displayShadow ? `${HEIGHT * 1.6}px` : `${HEIGHT}px`};
  background-color:rgb(45,45,45);
  margin:5px;
  top:${({ displayShadow }) => !displayShadow ? '0px' : `-${((HEIGHT * 1.6) - HEIGHT) / 2}px`};
  margin-left:${({ displayShadow }) => !displayShadow ? '0px' : `-${((HEIGHT * 1.6) - HEIGHT) / 2}px`};
  transition: all ${TRANSITION}s;
  transition-delay: 0.1s;
  cursor: pointer;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: ${({ displayShadow }) => displayShadow ? 1000 : 10};
`;

export const Shadow = styled.div`
  positon:relative;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding:20px;
  align-items: flex-start;
  transition: all ${TRANSITION}s;
  transition-delay: 0.1s;
  width: ${({ displayShadow }) => displayShadow ? `${WIDTH * 1.6}px` : `${WIDTH}px`};
  height: calc(100% - 40px);
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
`;

export const PlayLogo = styled(GoDiffAdded)`
  position:absolute;
  color:${MAIN_COLOR};
  font-size:3em;
  margin-top:${HEIGHT / 4}px;
  margin-left:85px;
`;

export const FakeDiv = styled.div`
  position:relative;
  display:flex;
  width: ${({ displayShadow }) => displayShadow ? `${WIDTH * 1.6}px` : `${WIDTH}px`};
  background-color:rgb(45,45,45);
  margin:5px;
  margin-top:${({ displayShadow }) => !displayShadow ? '0px' : `-${((HEIGHT * 1.6) - HEIGHT) / 2}px`};
  margin-left:${({ displayShadow }) => !displayShadow ? '0px' : `-${((HEIGHT * 1.6) - HEIGHT) / 2}px`};
  transition: all ${TRANSITION}s;
  transition-delay: 0.1s;
  z-index:0;
`;
