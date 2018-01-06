import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';

import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

export const MainContainer = styled.div`
  position:relative;
  display:flex;
  width:${WIDTH}px;
  height:${({ isSmall }) => isSmall ? 0 : HEIGHT}px;
  margin: ${MARGIN}px;
  z-index:100;
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.1)'};
    z-index:${({ hidden }) => hidden ? '100' : '110'};
    box-shadow: 0 0 50px 1px rgba(0,0,0,0.7);
  };
  border-radius:2px;
  overflow:hidden;
  top: 0;
  transition: all ${TRANSITION}s ease-in-out, height 1s ease-in-out;
  transition-delay: ${({ pos, moviesCount }) => {
  if (moviesCount >= 20) {
    return ((pos - (moviesCount - 20)) / 10);
  }
  return (pos / 10); 
  }}s;
`;

export const BackgroundImage = styled.div`
  position:absolute;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter:${({ displayShadow, hidden }) => displayShadow && !hidden ? 'blur(2px)' : ' blur(0px)'};
  -webkit-backface-visibility: hidden;
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: all 0.4s ease;
`;

export const ShadowContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:calc(100% - 20px);
  opacity: ${({ opacity }) => opacity};
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  transition: all ${TRANSITION + 0.5}s;
  transition-delay:1s;
  padding:20px;
  padding-bottom:0;
  z-index:120;
`;

export const Title = styled.p`
  color:white;
  margin:0;
  font-size:1em;
  font-weight:900;
  align-self:flex-start;
  user-select: none;
`;


export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:2.8em;
  cursor: pointer;
  transition: all 0.2s;
  transition-delay:0.2s;
  &:hover {
    color:${MAIN_COLOR};
  }
  margin-left:5px;
`;

export const LinkStyed = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  border-width:3px;
  border-style: solid;
  border-color:white;
  border-radius:100%;
  margin:25px;
  min-width:37px;
  min-height:37px;
  max-width:37px;
  max-height:37px;
  &:focus {
    outline:none;
  }
  transition: all ${TRANSITION + 1}s;
  opacity: 1;
  transition-delay: 1.2s;
  &:hover {
    color:${MAIN_COLOR};
  }
`;

export const DescriptionContainer = styled.div`
  display:flex;
  height: ${HEIGHT / 2}px;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size:0.8em;
  margin-top:15px;
`;

export const DesciptionText = styled.p`
  color:white;
  opacity: ${({ opacity }) => opacity};
  transition: all ${TRANSITION + 1}s;
  user-select: none;
  background: linear-gradient(white, rgba(0,0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-align: justify;
`;
