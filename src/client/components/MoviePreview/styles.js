import styled from 'styled-components';
import GoDiffAdded from 'react-icons/lib/go/diff-added';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';

const HEIGHT = 150;
const WIDTH = 250;
const TRANSITION = 0.2;

export const LinkStyed = styled(Link)`
  text-decoration:none;
`;

export const MoviePreviewContainer = styled.div`
  position:${({ displayShadow }) => displayShadow ? 'relative' : 'relative'};
  display:flex;
  width: ${({ displayShadow }) => displayShadow ? `${WIDTH * 1.3}px` : `${WIDTH}px`};
  height: ${({ displayShadow }) => displayShadow ? `${HEIGHT * 1.3}px` : `${HEIGHT}px`};
  background-color:rgb(45,45,45);
  margin:5px;
  margin-top:${({ displayShadow }) => displayShadow ? '30px' : `${(HEIGHT * 1.3) - HEIGHT}px`};
  margin-bottom:30px;
  transition: all ${TRANSITION}s ease;
  transition-delay: 0.1s;
  cursor: pointer;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all ${TRANSITION}s ease;
  transition-delay: 0.1s;
  width: ${({ displayShadow }) => displayShadow ? `${WIDTH * 1.3}px` : `${WIDTH}px`};
  height: 100%;
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
  display:flex;
  position:relative;
  width: ${WIDTH * 1.3};
  height: ${({ displayShadow }) => displayShadow ? `${HEIGHT * 1.3}px` : `${HEIGHT}px`};
`;
