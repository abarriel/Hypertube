import styled from 'styled-components';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';
import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

export const MovieRowContent = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  z-index:1000;
`;
export const MovieRowContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all ${TRANSITION}s ease-in-out;
  margin-bottom:20px;
  margin-left:${({ margin }) => `${(margin * (WIDTH + (2 * MARGIN))) + 45}px`};
`;

export const MoviePreviewContainer = styled.div`
  position:relative;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  opacity:${({ hidden }) => hidden ? 0.5 : 1};
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.9)' : 'scale(1)'};
  margin:${MARGIN}px;
  margin-top:25px;
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.9)' : 'scale(1.3)'};
    z-index:${({ hidden }) => hidden ? '100' : '110'};
    box-shadow:${({ hidden }) => hidden ? '' : '0 0 50px 1px rgba(0,0,0,0.7)'};
  };
  overflow:hidden;
  transition: all ${TRANSITION}s ease-in-out;
  transition-delay: 0.05s;
`;

export const ScrollBarContainer = styled.div`
  position:absolute;
  top:0;
  left:calc(100vw - 300px);
  display: ${({ isHover }) => isHover ? 'none' : 'none'};
  transition: all 0.3s ease-in-out;
  width:200px;
  height:20px;
  background-color:red;
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
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.6));  30%);
  transition: all ${TRANSITION}s;
  padding:20px;
  padding-bottom:0;
  z-index:120;
`;

export const Title = styled.div`
  color:white;
  margin:0;
  opacity: ${({ opacity }) => opacity};
  transition: all ${TRANSITION}s;
  transition-delay:0.1s;
  font-size:1em;
  font-weight:900;
  align-self:flex-start;
  user-select: none;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:1;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:2.8em;
  cursor: pointer;
  transition: all 0.2s;
  margin-left:5px;
  color: ${({ color }) => color};
`;

export const PlayLogoContainer = styled(Link)`
  display:flex;
  align-self:center;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  border-width:1px;
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
  transition: all 0.2s;
  opacity: ${({ opacity }) => opacity};
  &:hover {
    color:${MAIN_COLOR};
  };
`;

export const DescriptionContainer = styled.div`
  display:flex;
  flex-direction:column;
  height: ${HEIGHT / 2}px;
  opacity: ${({ opacity }) => opacity};
  transition: all ${TRANSITION + 5}s;
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size:0.8em;
  margin-top:15px;
`;

export const DesciptionText = styled.p`
  color:white;
  user-select: none;
  -webkit-text-align: justify;
  user-select: none;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  background: linear-gradient(white, rgba(0,0,0,0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  -webkit-backface-visibility: hidden;
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: all 0.4s ease;
`;

export const MoreButton = styled(MdKeyboardArrowDown)`
  position:absolute;
  bottom:3%;
  color: ${({ color }) => color};
  font-size:2.7em;
  left:calc(50% - 12px);
`;

export const MoviePreviewContent = styled.div`
`;

export const RatingAndView = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;

export const RatingContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ color }) => color};
  color:${({ color }) => color};
  align-self:flex-start;
  min-height:15px;
  min-width:30px;
  font-weight:100;
`;

export const ViewOrNot = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ color }) => color};
  color:${({ color }) => color};
  align-self:flex-start;
  min-height:15px;
  min-width:30px;
  font-weight:100;
  padding-left:5px;
  padding-right:5px;
`;


export const TopSide = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  width:100%;
  cursor:pointer;
`;

export const BotSide = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  width:100%;
  cursor:pointer;
  opacity:${({ opacity }) => opacity === 0 ? 0 : 1};
  transition: opacity 1s;
  transition-delay:0.2s;
`;
