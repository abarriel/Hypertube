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
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: all ${TRANSITION}s ease, background-size ${TRANSITION + 1}s ease;
  transition-delay:0s;
  z-index:100;
  transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1)'};
  margin-left:${MARGIN}px;
  margin-right:${MARGIN}px;
  margin-top:${({ hidden }) => hidden ? '30px' : ''};
  &:hover {
    transform:${({ hidden }) => hidden ? 'scale(0.8)' : 'scale(1.2)'};
    z-index:${({ hidden }) => hidden ? '100' : '1000'};
    background-size: ${({ hidden }) => hidden ? 'cover' : '110%'}
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
  height:calc(100% - 40px);
  opacity: ${({ isHover }) => isHover ? 1 : 0};
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  transition: all ${TRANSITION + 0.5}s;
  padding:20px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
  align-self:flex-start;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  color:white;
  font-size:3em;
  cursor: pointer;
  transition: all ${TRANSITION}s;
  transition-delay:0.2s;
  &:hover {
    color:${MAIN_COLOR};
    transform: scale(0.8);
  }
  margin-left:5px;
`;

export const DescriptionContainer = styled.div`
  display:flex;
  max-height: ${HEIGHT / 3}px;
  overflow:hidden;
  text-overflow:ellipsis;
  hyphens: auto;
  transition: all ${TRANSITION + 1}s;
  opacity: ${({ isHover }) => isHover ? 1 : 0};
  transition-delay: 0.3s;
`;

export const Description = styled.p`
  color:white;
  font-size:0.7em;
`;

export const LinkStyed = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  border-width:2px;
  border-style: solid;
  border-color:white;
  border-radius:100%;
  width:37px;
  height:37px;
  &:focus {
    outline:none;
  }
  transition: all ${TRANSITION + 1}s;
  opacity: ${({ isHover }) => isHover ? 1 : 0};
  transition-delay: 0.15s;
`;