import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';
import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

export const MovieRowContent = styled.div`
  display:flex;
  flex-direction:column;
`;
export const MovieRowContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  transition: all ${TRANSITION}s ease-out;
  margin-bottom:20px;
  margin-left:${({ margin }) => `${(margin * (WIDTH + 15)) + 45}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  opacity:${({ hidden }) => hidden ? 0.5 : 1};
  transition: all ${TRANSITION}s ease-in-out;
  transition-delay: 0.05s;
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1)'};
  margin:${MARGIN}px;
  margin-top:25px;
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.1)'};
    z-index:${({ hidden }) => hidden ? '100' : '110'};
    box-shadow: 0 0 50px 1px rgba(0,0,0,0.7);
  };
  border-radius:2px;
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
  height:3px;
  border-radius:100px;
  transition: all ${TRANSITION}s;
  width:${({ width }) => `${width}px`};
  margin-left:${({ margin }) => `${margin}px`};
  opacity: 0.8;
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
  transition-delay:0.7s;
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
  opacity: ${({ opacity }) => opacity};
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

export const BackgroundImage = styled.div`
  position:absolute;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all ${TRANSITION + 1.2}s ease-in;
  transition-delay:1s;
  filter:${({ displayShadow, hidden }) => displayShadow && !hidden ? 'blur(3px)' : ' blur(0px)'};
  -webkit-backface-visibility: hidden;
  -ms-transform: translateZ(0); /* IE 9 */
  -webkit-transform: translateZ(0); /* Chrome, Safari, Opera */
  transform: translateZ(0);
`;
