import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
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
  transition: all ${TRANSITION}s ease;
  margin-bottom:20px;
  margin-left:${({ margin }) => `${(margin * (WIDTH + 15)) + 45}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  opacity:${({ hidden }) => hidden ? 0.5 : 1};
  transition: all ${TRANSITION}s ease, background-size ${TRANSITION }s ease;
  transition-delay:0s;
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1)'};
  margin-left:${MARGIN}px;
  margin-right:${MARGIN}px;
  margin-top:25px;
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.1)'};
    z-index:${({ hidden }) => hidden ? '100' : '1000'};
  };
  border-radius:1px;
  overflow:hidden;
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
  padding:20px;
  padding-bottom:0;
  z-index:10000;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
  align-self:flex-start;
  user-select: none;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:3em;
  cursor: pointer;
  transition: all ${TRANSITION}s;
  transition-delay:0.2s;
  &:hover {
    color:${MAIN_COLOR};
    transform: scale(0.9);
  }
  margin-left:5px;
`;

export const DescriptionContainer = styled.div`
  display:flex;
  height: ${HEIGHT / 2}px;
  width:100%;
  transition: all ${TRANSITION + 1}s;
  opacity: ${({ opacity }) => opacity};
  transition-delay: 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  color:white;
  font-size:0.7em;
  user-select: none;
  background: -webkit-linear-gradient(#eee, rgba(0,0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: justify;
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
  margin:20px;
  min-width:37px;
  min-height:37px;
  max-width:37px;
  max-height:37px;
  &:focus {
    outline:none;
  }
  transition: all ${TRANSITION + 1}s;
  opacity: ${({ opacity }) => opacity};
  transition-delay: 0.15s;
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
  transition: all ${TRANSITION + 1.2}s;
  transform:${({ displayShadow, hidden }) => displayShadow && !hidden ? 'scale(1.2)' : 'scale(1)'};
`;
