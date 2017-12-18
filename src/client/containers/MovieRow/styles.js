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
  margin-left:${MARGIN}px;
  margin-right:${MARGIN}px;
  margin-top:${({ hidden }) => hidden ? '30px' : ''};
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.2)'};
    z-index:${({ hidden }) => hidden ? '100' : '1000'};
  };
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

export const ShadowContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:calc(100% - 30px);
  opacity: ${({ isHover }) => isHover ? 1 : 0};
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  transition: all ${TRANSITION}s;
  transition-delay: 0.1s;
  padding:15px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:0.9em;
  align-self:flex-start;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:3em;
  cursor: pointer;
  transition: all ${TRANSITION}s;
  &:hover {
    color:${MAIN_COLOR};
    transform: scale(0.8);
  }
`;

export const DescriptionContainer = styled.div`
  display:flex;
  max-height: ${HEIGHT / 3}px;
  overflow: hidden;
`;

export const Description = styled.p`
  color:white;
  font-size:0.7em;
`;

export const LinkStyed = styled(Link)`
  text-decoration:none;
  &:focus {
    outline:none;
  }
`;
