import styled from 'styled-components';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';
import GoPlus from 'react-icons/lib/go/plus';

import { MAIN_COLOR } from '../../colors';

export const MoviePreviewSliderContainer = styled.div`
  position:relative;
  display:flex;
  width:100vw;
  height:56.25vw;
  left:0;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap:no-wrap;
  transition: left 0.3s ease-in-out;
  background-color: rgb(20,20,20);
`;

export const MoviePreviewSliderImageContainer = styled.div`
  display:flex;
  justify-content: center;
  min-width:100%;
  height:100%;
`;

export const MoviePreviewSliderImage = styled.div`
  display:flex;
  width:100%;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PagerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  min-height:50px;
  margin-top:5px;
  margin-bottom:35px;
`;

export const PagerElem = styled.div`
  display:flex;
  height:11px;
  width:11px;
  border-radius: 100%;
  background-color:${MAIN_COLOR};
  transition: all 0.7s ease;
  margin-left:7px;
  margin-right:7px;
  transform: ${({ selected }) => selected ? 'scale(1.2)' : 'scale(1)'};
  opacity: ${({ selected }) => selected ? 0.8 : 0.2};
  cursor:pointer;
  &:hover {
    opacity: ${({ selected }) => selected ? 0.8 : 0.4};
  }
`;

export const Cache = styled.div`
  position:absolute;
  display:flex;
  width:100vw;
  background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
  background-size: 100% 100%;
  background-repeat: repeat-x;
  background-color: transparent;
  height: 22.8vw;
  -webkit-font-smoothing: antialiased;
  height:400px;
  bottom:-100px;
`;

export const MoviePreviewSlideInfo = styled.div`
position:relative;
  top: 0;
  width: 40%;
  left: 0;
  padding-left: 4%;
  height: 130%;
`;

export const MoviePreviewSlideInfoInner = styled.div`
  display:flex;
  flex-direction:column;
  margin: 0;
  width: 100%;
  padding-top: calc(10vw - 70px);
  position: relative;
`;

export const MovieLogo = styled.div`
  display:flex;
  width: 90%;
  background-image:url('${({ movieLogo }) => movieLogo}');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 14vw;
`;

export const ButtonContainer = styled.div`
  display:flex;
  margin-top: 1.5vw;
  white-space: nowrap;
  user-select: none;
  font-size: 1vw;
`;

export const BlackButton = styled.div`
  position:relative;
  height: 1.4vw;
  width:7vw;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: black;
  border-color: #ff0a16;
  font-size: 1vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.3);
  border: 1px solid rgba(255,255,255,.4);
  transition:all 0.2s ease-in-out;
  &:hover {
    background-color:rgb(20,20,20);
  }
`;

export const RedButton = styled.div`
  position:relative;
  height: 1.4vw;
  width:7vw;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background-color: #e50914;
  border-color: #ff0a16;
  font-size: 1vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.3);
`;

export const Description = styled.p`
  margin: 1vw 0 0 0;
  color: #fff;
  font-weight: 100;
  line-height: 1.35;
  width: 100%;
  font-size: 1.4vw;
  user-select: none;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  font-size:1.8em;
  margin-right:5px;
`;

export const PlusLogo = styled(GoPlus)`
  font-size:1.5em;
  margin-right:5px;
`;
