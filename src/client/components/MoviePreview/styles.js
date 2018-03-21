import styled from 'styled-components';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import { Link } from 'react-router-dom';
import { MAIN_COLOR } from '../../colors';

import { HEIGHT, WIDTH, TRANSITION, MARGIN } from './constants';

export const MainContainer = styled.div`
  position:relative;
  display:flex;
  width:${WIDTH}px;
  height:${HEIGHT}px;
  margin: ${MARGIN};
  z-index:100;
  opacity:${({ isSmall }) => isSmall ? 0 : 1};
  overflow:hidden;
  top: 0;
  transition-delay: 0.05s;
  transition: all ${TRANSITION}s ease, opacity 1s ease-in-out ${({ pos, moviesCount }) => {
  if (moviesCount >= 25) {
    return ((pos - (moviesCount - 25)) / 20);
  }
  return (pos / 20);
}}s;
  @media (max-width: 400px) {
    width:100%;
    height:150vw;
    margin:0;
  };
`;

export const BackgroundImage = styled.div`
  position:absolute;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  @media (max-width: 400px) {
    width:100%;
    height:150vw;
  }
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

export const ShadowContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  max-width:100%;
  overflow:hidden;
  height:calc(100% - 20px);
  opacity: ${({ opacity }) => opacity};
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  transition: all ${0.3}s;
  transition-delay:0.2s;
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


export const MoreButton = styled(FaChevronDown)`
  position:absolute;
  bottom:10%;
  color:white;
  font-size:1.7em;
  left:calc(50% - 12px);
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
