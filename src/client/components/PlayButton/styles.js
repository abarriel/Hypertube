import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoPlaybackPlay from 'react-icons/lib/go/playback-play';

export const PlayButtonContainer = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  font-size: 1vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  border: 1px solid #ff0a16;
  width:150px;
  height:30px;
  text-decoration:none;
  &:hover{
    background-color:#ff0a16;
  }
`;

export const PlayLogo = styled(GoPlaybackPlay)`
  font-size:40px;
  margin-right:5px;
  @media (max-width: 1399px) {
    font-size: 1.8vw;
  };
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;

